import * as Alexa from 'ask-sdk';
import { DynamoDbPersistenceAdapter } from 'ask-sdk';
import { DynamoDB } from 'aws-sdk';
import * as fs from 'fs';

import { APLDocument } from '../../apl';
import { APLADocument } from '../../apla';
import { LocaleString, ModelProvider } from '../../types';
import { RegionAllAllowedTypesEndpointUri, SkillManifestEndpointAllAllowedTypesEndpointUri, SkillManifestModel } from '../interfaces';
import { Locale } from '../locale';
import { DynamoDBInfo, FilePackageWriter, LabeledRequestHandler } from '../models';
import { JSBRequestInterceptor, JSBResponseInterceptor } from '../types';

export type Locales = { [locale in LocaleString]?: Locale };
export type APLDocuments = { [documentName: string]: APLDocument };
export type APLADocuments = { [documentName: string]: APLADocument };
export interface CustomEndpointsProps {
  endpoint: SkillManifestEndpointAllAllowedTypesEndpointUri;
  regions?: {
    EU?: RegionAllAllowedTypesEndpointUri;
    FE?: RegionAllAllowedTypesEndpointUri;
    IN?: RegionAllAllowedTypesEndpointUri;
    NA?: RegionAllAllowedTypesEndpointUri;
  };
}

export interface SkillProps {
  name: string;
  custom: CustomEndpointsProps;
  customUserAgent?: string;
  dynamoDBInfo?: DynamoDBInfo;
  requestInterceptor?: JSBRequestInterceptor;
  responseInterceptor?: JSBResponseInterceptor;
}

export class Skill implements ModelProvider<SkillManifestModel>, FilePackageWriter {
  readonly props: SkillProps;
  readonly locales: Locales;
  readonly aplDocuments: APLDocuments;
  readonly aplaDocuments: APLADocuments;

  constructor(props: SkillProps) {
    this.locales = {};
    this.aplDocuments = {};
    this.aplaDocuments = {};
    this.props = props;
  }
  toJSON(): SkillManifestModel {
    return this.model();
  }

  addLocale(locale: Locale): this {
    if (this.locales[locale.localeValue]) {
      throw new Error(`${locale.localeValue} already added to skill`);
    }
    this.locales[locale.localeValue] = locale;
    return this;
  }

  addAPLDocument(aplDocument: APLDocument): this {
    if (this.aplDocuments[aplDocument.props.documentName]) {
      throw new Error(`APL Document already added ${aplDocument.props.documentName}`);
    }
    this.aplDocuments[aplDocument.props.documentName] = aplDocument;
    return this;
  }

  addAPLADocument(aplaDocument: APLADocument): this {
    if (this.aplDocuments[aplaDocument.props.documentName]) {
      throw new Error(`APLA Document already added ${aplaDocument.props.documentName}`);
    }
    this.aplaDocuments[aplaDocument.props.documentName] = aplaDocument;
    return this;
  }

  addAlexaHostedDynamoDBPersistenceAdapter(builder: Alexa.CustomSkillBuilder): void {
    if (this.props.dynamoDBInfo) {
      builder.withPersistenceAdapter(
        new DynamoDbPersistenceAdapter({
          tableName: process.env.DYNAMODB_PERSISTENCE_TABLE_NAME!,
          createTable: true,
          dynamoDBClient: new DynamoDB({ apiVersion: 'latest', region: process.env.DYNAMODB_PERSISTENCE_REGION! })
        })
      );
    }
  }
  addDynamoDBPersistenceAdapter(builder: Alexa.CustomSkillBuilder): void {
    if (this.props.dynamoDBInfo) {
      builder.withPersistenceAdapter(new DynamoDbPersistenceAdapter(this.props.dynamoDBInfo));
    }
  }

  addRequestInterceptor(builder: Alexa.CustomSkillBuilder): void {
    if (this.props.requestInterceptor) {
      builder.addRequestInterceptors({
        process: this.props.requestInterceptor
      });
    }
  }

  addResponseInterceptor(builder: Alexa.CustomSkillBuilder): void {
    if (this.props.responseInterceptor) {
      builder.addResponseInterceptors({
        process: this.props.responseInterceptor
      });
    }
  }

  getErrorHandlers(): Alexa.ErrorHandler[] {
    return this.getLocaleStrings()
      .map((ls) => this.locales[ls])
      .map((locale) => locale!.getErrorHandler());
  }

  builder(): Alexa.CustomSkillBuilder {
    const builder = Alexa.SkillBuilders.custom()
      .addRequestHandlers(...this.getRequestHandlers())
      .addErrorHandlers(...this.getErrorHandlers())

      .withCustomUserAgent(this.props.customUserAgent ? this.props.customUserAgent : 'JamiabboSkillBuilder');

    this.addRequestInterceptor(builder);
    this.addResponseInterceptor(builder);
    return builder;
  }

  handler(): Alexa.LambdaHandler {
    return this.builder().lambda();
  }

  writeSkillPackage(rootFolder?: string) {
    const baseSkillPackagePath = (rootFolder ? rootFolder : '.') + '/skill-package/';
    (Object.keys(this.locales) as LocaleString[])
      .map((locale: LocaleString) => this.locales[locale]!)
      .forEach((locale: Locale) => {
        locale.writeToPackageFile(baseSkillPackagePath);
      });
    Object.keys(this.aplDocuments)
      .map((documentName: string) => this.aplDocuments[documentName])
      .forEach((aplDocument: APLDocument) => aplDocument.writeToFile(baseSkillPackagePath));
    Object.keys(this.aplaDocuments)
      .map((documentName: string) => this.aplaDocuments[documentName])
      .forEach((aplaDocument: APLADocument) => aplaDocument.writeToFile(baseSkillPackagePath));

    this.writeToPackageFile(baseSkillPackagePath);
  }

  getRequestHandlers(): LabeledRequestHandler[] {
    const localeList = this.getLocaleStrings().map((locale: LocaleString) => this.locales[locale]!);
    const aplDocumentKeys = Object.keys(this.aplDocuments).map((documentName: string) => this.aplDocuments[documentName]);
    const requestHandlers = localeList
      .flatMap((locale: Locale) => locale.getRequestHandlers())
      .concat(aplDocumentKeys.flatMap((aplDocument: APLDocument) => aplDocument.getRequestHandlers()));
    return requestHandlers;
  }

  private getLocaleStrings(): LocaleString[] {
    return Object.keys(this.locales) as LocaleString[];
  }

  model(): SkillManifestModel {
    return {
      manifest: {
        manifestVersion: '1.0',

        apis: {
          custom: {
            dialogManagement: {
              dialogManagers: [
                {
                  type: 'AMAZON.Conversations'
                }
              ]
            },
            endpoint: this.props.custom?.endpoint,
            regions: this.props.custom?.regions,
            interfaces: [
              {
                type: 'ALEXA_PRESENTATION_APL',
                supportedViewports: [
                  {
                    mode: 'HUB',
                    shape: 'ROUND',
                    minWidth: 100,
                    maxWidth: 599,
                    minHeight: 100,
                    maxHeight: 599
                  },
                  {
                    mode: 'HUB',
                    shape: 'RECTANGLE',
                    minHeight: 600,
                    maxHeight: 959,
                    minWidth: 960,
                    maxWidth: 1279
                  },
                  {
                    mode: 'HUB',
                    shape: 'RECTANGLE',
                    minHeight: 600,
                    maxHeight: 1279,
                    minWidth: 1280,
                    maxWidth: 1920
                  },
                  {
                    mode: 'TV',
                    shape: 'RECTANGLE',
                    minHeight: 540,
                    maxHeight: 540,
                    minWidth: 960,
                    maxWidth: 960
                  }
                ]
              }
            ]
          }
        },
        publishingInformation: {
          locales: [
            {},
            ...this.getLocaleStrings().map((localeString: LocaleString) => {
              return {
                [localeString]: {
                  name: this.props.name
                }
              };
            })
          ].reduce((left, right) => {
            return {
              ...left,
              ...right
            };
          }),
          name: this.props.name
        }
      }
    };
  }

  writeToPackageFile(baseSkillPackagePath?: string | undefined): void {
    const packageFolder = baseSkillPackagePath ? baseSkillPackagePath : './';
    if (!fs.existsSync(packageFolder)) {
      fs.mkdirSync(packageFolder, { recursive: true });
    }

    const model = this.model();
    // write interaction models
    fs.writeFileSync(`${packageFolder}/skill.json`, JSON.stringify(model, null, 2));
  }
}

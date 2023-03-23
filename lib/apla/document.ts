import { interfaces } from 'ask-sdk-model';
import * as fs from 'fs';
import * as uuid from 'uuid';

import { APLABaseComponentModel, APLABaseComponentProps, APLAComponent } from './components';
import { APLAResourcesProps } from './interfaces';
import { ModelProvider } from '../';

export interface APLADocumentModel {
  type?: string;
  version?: string;
  description?: string;
  // compositions?: CompositionProps[];
  resources?: APLAResourcesProps[];
  mainTemplate: {
    parameters: string[];
    items: APLAComponent<APLABaseComponentModel, APLABaseComponentProps>[];
  };
}

export interface APLADocumentProps {
  documentName: string;
  description?: string;
  // compositions?: CompositionProps[];
  resources?: APLAResourcesProps[];
  items: APLAComponent<APLABaseComponentModel, APLABaseComponentProps>[];
}

export class APLADocument implements ModelProvider<APLADocumentModel> {
  readonly props: APLADocumentProps;
  constructor(props: APLADocumentProps) {
    this.props = props;
  }

  getDirective(additionalData?: unknown): interfaces.alexa.presentation.apla.RenderDocumentDirective {
    const data = additionalData;
    return {
      type: 'Alexa.Presentation.APLA.RenderDocument',
      token: uuid.v4(),
      document: {
        src: `doc://alexa/apla/documents/${this.props.documentName}`,
        type: 'Link'
      },
      datasources: {
        ...(data ? data : {})
      }
    };
  }

  getFullDirective(additionalData?: unknown): interfaces.alexa.presentation.apla.RenderDocumentDirective {
    const data = additionalData;
    return {
      type: 'Alexa.Presentation.APLA.RenderDocument',
      token: uuid.v4(),
      document: {
        ...this.model()
      },
      datasources: {
        ...(data ? data : {})
      }
    };
  }

  toJSON(): APLADocumentModel {
    return this.model();
  }

  model(): APLADocumentModel {
    return {
      type: 'APLA',
      version: '0.91',
      description: this.props.description,
      mainTemplate: {
        parameters: [],
        items: this.props.items
      }
    };
  }

  writeToFile(baseSkillPackagePath?: string) {
    const aplaDocumentFolder = (baseSkillPackagePath ? baseSkillPackagePath : './') + `response/prompts/${this.props.documentName}`;
    if (!fs.existsSync(aplaDocumentFolder)) {
      fs.mkdirSync(aplaDocumentFolder, { recursive: true });
    }

    const model = this.model();
    // write interaction models
    fs.writeFileSync(`${aplaDocumentFolder}/document.json`, JSON.stringify(model, null, 2));
  }
}

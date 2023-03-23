import * as Alexa from 'ask-sdk-core';
import { interfaces } from 'ask-sdk-model';
import * as fs from 'fs';
import * as uuid from 'uuid';

import { AVGGraphic, Gradient, GradientModel, GradientProps } from './avg';
import { Command, CommandModel, CommandProps } from './commands';
import { APLBaseComponentModel, APLBaseComponentProps, APLComponent } from './components/component';
import {
  APLResourceModel,
  APLResourceProps,
  APLVersion,
  BindingModel,
  Color,
  DynamicIndexListModel,
  DynamicIndexListProps,
  DynamicTokenListModel,
  DynamicTokenListProps,
  ExportModel,
  ExportProps,
  ExtensionsModel,
  ExtensionsProps,
  ImportModel,
  ImportProps,
  Style,
  Theme,
  TickHandlerModel,
  TickHandlerProps,
  UserDefinedCommandsModel
} from './interfaces';
import { convertComponentListToRequestHandlers } from './interfaces/helpers';
import { LabeledRequestHandler, RequestHandlerProvider } from '../skill';
import { wrapHandler } from '../skill/helpers';

export interface APLMainTemplateModel {
  parameters: string[];
  items: APLBaseComponentModel[];
  bind?: BindingModel[];
}
export interface APLDocumentModel extends APLBaseComponentModel {
  import?: ImportModel[];
  export?: ExportModel[];
  // commands?: UserDefinedCommandsModel;
  extensions?: ExtensionsModel[];
  graphics?: {
    [key: string]: AVGGraphic;
  };
  resources?: APLResourceModel[];
  mainTemplate: APLMainTemplateModel;

  /**
   * Override standard background color.
   */
  background?: Color | Gradient<GradientModel, GradientProps>;

  /**
   * An optional description of this document.
   */
  description?: string;
  handleTick?: TickHandlerModel[];

  environment?: { [key: string]: unknown };
  /**
   * A list of commands to execute when the document configuration changes.
   */
  onConfigChange?: Command<CommandModel, CommandProps>[];
  /**
   * A list of the commands to execute whenever the display state of the document changes
   */
  onDisplayStateChange?: Command<CommandModel, CommandProps>[];
  /**
   * A list of commands to execute when the document is first displayed.
   */
  onMount?: Command<CommandModel, CommandProps>[];
  /**
   * A map of document-wide settings.
   */
  settings?: { [key: string]: unknown };
  /**
   * A map of style name to style definition
   */
  styles?: {
    [k: string]: Style;
  };
  /**
   * A map of name to layout.
   */
  //  layouts?: {
  //    [k: string]: Layout1;
  //  };
  version: APLVersion;
  /**
   * The sample templates are under Amazon Software License
   */
  license?: string;
  theme?: Theme;
}
export interface APLDocumentProps extends APLBaseComponentProps {
  documentName: string;
  items: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[];
  import?: ImportProps[];
  export?: ExportProps[];
  commands?: UserDefinedCommandsModel;
  extensions?: ExtensionsProps[];
  graphics?: {
    [key: string]: AVGGraphic;
  };
  resources?: APLResourceProps[];
  dynamicTokenLists?: {
    [key: string]: DynamicTokenListProps;
  };
  dynamicIndexLists?: {
    [key: string]: DynamicIndexListProps;
  };
  staticData?: { [key: string]: unknown };

  /**
   * Override standard background color.
   */
  background?: Color | Gradient<GradientModel, GradientProps>;

  /**
   * An optional description of this document.
   */
  description?: string;
  handleTick?: TickHandlerProps[];

  environment?: { [key: string]: unknown };
  /**
   * A list of commands to execute when the document configuration changes.
   */
  onConfigChange?: Command<CommandModel, CommandProps>[];
  /**
   * A list of the commands to execute whenever the display state of the document changes
   */
  onDisplayStateChange?: Command<CommandModel, CommandProps>[];
  /**
   * A list of commands to execute when the document is first displayed.
   */
  onMount?: Command<CommandModel, CommandProps>[];
  /**
   * A map of document-wide settings.
   */
  settings?: { [key: string]: unknown };
  /**
   * A map of style name to style definition
   */
  styles?: {
    [k: string]: Style;
  };
  /**
   * A map of name to layout.
   */
  //  layouts?: {
  //    [k: string]: Layout1;
  //  };
  version?: APLVersion;
  /**
   * The sample templates are under Amazon Software License
   */
  license?: string;
  theme?: Theme;
}

export class APLDocument extends APLComponent<APLDocumentModel, APLDocumentProps> implements RequestHandlerProvider {
  constructor(props: APLDocumentProps) {
    super('APL', props);
  }

  addComponents(..._components: APLComponent<APLBaseComponentModel, APLBaseComponentProps>[]): this {
    this.props.items.push(..._components);
    return this;
  }

  componentSpecificModel(): APLDocumentModel {
    return {
      version: this.props.version ? this.props.version : '2023.1',
      import: [
        {
          name: 'alexa-layouts',
          version: '1.6.0'
        },
        {
          name: 'alexa-viewport-profiles',
          version: '1.5.0'
        },
        {
          name: 'alexa-styles',
          version: '1.5.0'
        },
        ...(this.props.import ? this.props.import : [])
      ],
      mainTemplate: {
        parameters: [
          ...(this.props.dynamicTokenLists ? Object.keys(this.props.dynamicTokenLists) : []),
          ...(this.props.dynamicIndexLists ? Object.keys(this.props.dynamicIndexLists) : []),
          ...(this.props.staticData ? Object.keys(this.props.staticData) : [])
        ],
        bind: this.props.bind,
        items: this.props.items
      },

      export: this.props.export,
      // commands: this.props.commands,
      extensions: this.props.extensions,
      graphics: this.props.graphics,
      resources: this.props.resources,

      /**
       * Override standard background color.
       */
      background: this.props.background,

      /**
       * An optional description of this document.
       */
      description: this.props.description,
      handleTick: this.props.handleTick,

      environment: this.props.environment,
      /**
       * A list of commands to execute when the document configuration changes.
       */
      onConfigChange: this.props.onConfigChange,
      /**
       * A list of the commands to execute whenever the display state of the document changes
       */
      onDisplayStateChange: this.props.onDisplayStateChange,
      /**
       * A list of commands to execute when the document is first displayed.
       */
      onMount: this.props.onMount,
      /**
       * A map of document-wide settings.
       */
      settings: this.props.settings,
      /**
       * A map of style name to style definition
       */
      styles: this.props.styles,

      /**
       * The sample templates are under Amazon Software License
       */
      license: this.props.license,
      theme: this.props.theme
    };
  }

  componentSpecificRequestHandlers(): LabeledRequestHandler[] {
    return [
      ...convertComponentListToRequestHandlers(this.props.items),
      ...this.convertDynamicTokenListPropsToRequestHandlers(this.props.dynamicTokenLists),
      ...this.convertDynamicIndexListPropsToRequestHandlers(this.props.dynamicIndexLists)
    ];
  }

  getDirective(additionalData?: unknown): interfaces.alexa.presentation.apl.RenderDocumentDirective {
    return {
      type: 'Alexa.Presentation.APL.RenderDocument',
      token: uuid.v4(),
      document: {
        src: `doc://alexa/apl/documents/${this.props.documentName}`,
        type: 'Link'
      },
      datasources: this.buildDatasources()
    };
  }

  getFullDirective(additionalData?: unknown): interfaces.alexa.presentation.apl.RenderDocumentDirective {
    return {
      type: 'Alexa.Presentation.APL.RenderDocument',
      token: uuid.v4(),
      document: this.model(),
      datasources: this.buildDatasources(additionalData)
    };
  }

  buildDatasources(additionalData?: unknown): { [key: string]: any } {
    return {
      ...(additionalData ? additionalData : {}),
      ...this.props.staticData,
      ...this.convertDynamicTokenListPropsToModel(this.props.dynamicTokenLists),
      ...this.convertDynamicIndexListPropsToModel(this.props.dynamicIndexLists)
    };
  }

  writeToFile(baseSkillPackagePath?: string) {
    const aplDocumentFolder = (baseSkillPackagePath ? baseSkillPackagePath : './') + `response/display/${this.props.documentName}`;
    if (!fs.existsSync(aplDocumentFolder)) {
      fs.mkdirSync(aplDocumentFolder, { recursive: true });
    }

    const model = this.model();
    // write interaction models
    fs.writeFileSync(`${aplDocumentFolder}/document.json`, JSON.stringify(model, null, 2));

    if (!fs.existsSync(`${aplDocumentFolder}/datasources`)) {
      fs.mkdirSync(`${aplDocumentFolder}/datasources`, { recursive: true });
    }
    fs.writeFileSync(`${aplDocumentFolder}/datasources/default.json`, JSON.stringify(this.buildDatasources(), null, 2));
  }

  private convertDynamicIndexListPropsToModel(props?: {
    [key: string]: DynamicIndexListProps;
  }): { [key: string]: DynamicIndexListModel } | undefined {
    if (props) {
      const keys = Object.keys(props);
      return keys
        .map((key) => {
          const converted: { [key: string]: DynamicIndexListModel } = {
            [key]: {
              type: 'dynamicIndexList',
              listId: key,
              startIndex: props[key].startIndex,
              minimumInclusiveIndex: props[key].minimumInclusiveIndex,
              maximumExclusiveIndex: props[key].maximumExclusiveIndex,
              items: props[key].items
            }
          };
          return converted;
        })
        .reduce((l, r) => {
          return {
            ...l,
            ...r
          };
        });
    }
    return undefined;
  }

  private convertDynamicTokenListPropsToModel(props?: {
    [key: string]: DynamicTokenListProps;
  }): { [key: string]: DynamicTokenListModel } | undefined {
    if (props) {
      const keys = Object.keys(props);
      return keys
        .map((key) => {
          const converted: { [key: string]: DynamicTokenListModel } = {
            [key]: {
              type: 'dynamicTokenList',
              pageToken: props[key].pageToken,
              listId: key,
              forwardPageToken: props[key].forwardPageToken,
              backwardPageToken: props[key].backwardPageToken,
              items: props[key].items
            }
          };
          return converted;
        })
        .reduce((l, r) => {
          return {
            ...l,
            ...r
          };
        });
    }
    return undefined;
  }

  private convertDynamicTokenListPropsToRequestHandlers(props?: { [key: string]: DynamicTokenListProps }): LabeledRequestHandler[] {
    if (props) {
      const keys = Object.keys(props);
      return keys.map((key) => {
        return {
          uniqueId: key,
          canHandle: (input) => {
            const requestType = Alexa.getRequestType(input.requestEnvelope);
            if (requestType === 'Alexa.Presentation.APL.LoadTokenListData') {
              const request: interfaces.alexa.presentation.apl.LoadTokenListDataEvent = Alexa.getRequest(input.requestEnvelope);
              return request.listId === key;
            }
            return false;
          },
          handle: wrapHandler(props[key].handler)
        };
      });
    }
    return [];
  }

  private convertDynamicIndexListPropsToRequestHandlers(props?: { [key: string]: DynamicIndexListProps }): LabeledRequestHandler[] {
    if (props) {
      const keys = Object.keys(props);
      return keys.map((key) => {
        return {
          uniqueId: key,
          canHandle: (input) => {
            const requestType = Alexa.getRequestType(input.requestEnvelope);
            if (requestType === 'Alexa.Presentation.APL.LoadIndexListData') {
              const request: interfaces.alexa.presentation.apl.LoadIndexListDataEvent = Alexa.getRequest(input.requestEnvelope);
              return request.listId === key;
            }
            return false;
          },
          handle: wrapHandler(props[key].handler)
        };
      });
    }
    return [];
  }
}

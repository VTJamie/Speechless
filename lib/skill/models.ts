import { PartitionKeyGenerator } from 'ask-sdk';
import { AttributesManager, ErrorHandler, RequestHandler, RequestInterceptor, ResponseInterceptor } from 'ask-sdk-core';
import { DynamoDB } from 'aws-sdk';

import { IntentModel } from './intent';
import { DelegationStrategyType, FallbackIntentSensitivityLevel } from './types';
import { SpeechType } from '../types';
export abstract class RequestHandlerProvider {
  abstract getRequestHandlers(): LabeledRequestHandler[];
}

export interface DynamoDBInfo {
  tableName: string;
  partitionKeyName?: string;
  attributesName?: string;
  createTable?: boolean;
  dynamoDBClient?: DynamoDB;
  partitionKeyGenerator?: PartitionKeyGenerator;
}

export interface IntentStatusProps {
  displaySupported: boolean;
  locale: string;
  aplDocumentToken?: string;
  attributesManager?: AttributesManager;
}

export interface DialogIntentProps {}

export interface MultipleValuesConfig {
  /**
   * Boolean that indicates whether this slot can capture multiple values.
   */
  enabled: boolean;
}

export interface SlotProps {
  /**
   * The name of the slot.
   */
  name: string;
  /**
   * The type of the slot. It can be a built-in or custom type.
   */
  type: string;
  /**
   * Configuration object for multiple values capturing behavior for this slot.
   */
  multipleValues?: MultipleValuesConfig;
  /**
   * Phrases the user can speak e.g. to trigger an intent or provide value for a slot elicitation.
   */
  samples?: Array<string>;

  confirmation?: ConfirmationProps;
  /**
   * Also known as elicitation
   */
  required?: RequiredProps;
}

export interface ConfirmationProps {
  prompts: PromptItems[];
}

export interface RequiredProps {
  prompts: PromptItems[];
}

export interface SlotModel {
  /**
   * The name of the slot.
   */
  name: string;
  /**
   * The type of the slot. It can be a built-in or custom type.
   */
  type?: string;
  /**
   * Configuration object for multiple values capturing behavior for this slot.
   */
  multipleValues?: MultipleValuesConfig;
  /**
   * Phrases the user can speak e.g. to trigger an intent or provide value for a slot elicitation.
   */
  samples?: Array<string>;
}

export interface ValueCatalog {
  /**
   * CatalogId.
   */
  catalogId: string;
  /**
   * Catalog version.
   */
  version: string;
}

export interface TypeValue {
  id?: string;
  name: TypeValueObject;
}

export interface InlineValueSupplier {
  type: 'InlineValueSupplier';
  /**
   * The list of slot type values.
   */
  values?: Array<TypeValue>;
}

export interface CatalogValueSupplier {
  type: 'CatalogValueSupplier';
  valueCatalog?: ValueCatalog;
}
export interface TypeValueObject {
  value: string;
  synonyms: Array<string>;
}

type ValueSupplier = CatalogValueSupplier | InlineValueSupplier;

export interface SlotType {
  /**
   * The name of the custom slot type.
   */
  name: string;
  /**
   * Name of the generator used to generate this object.
   */
  generatedBy?: string;
  /**
   * List of expected values. Values outside the list are still returned.
   */
  values?: Array<TypeValue>;
  valueSupplier?: ValueSupplier;
}

export interface FallbackIntentSensitivity {
  level: FallbackIntentSensitivityLevel;
}

export interface ModelConfiguration {
  fallbackIntentSensitivity?: FallbackIntentSensitivity;
}

export interface IntentPrompt {
  confirmation: string;
}
export interface LanguageModel {
  /**
   * Invocation name of the skill.
   */
  invocationName: string;
  types?: Array<SlotType>;
  intents: Array<IntentModel>;
  modelConfiguration?: ModelConfiguration;
}

export interface DialogIntentsPrompts {
  /**
   * Enum value in the dialog_slots map to reference the elicitation prompt id.
   */
  elicitation?: string;
  /**
   * Enum value in the dialog_slots map to reference the confirmation prompt id.
   */
  confirmation?: string;
}

export interface HasEntityResolutionMatch {
  type: 'hasEntityResolutionMatch';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
}
export interface IsGreaterThan {
  type: 'isGreaterThan';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * Value to compare to.
   */
  value: string;
}
export interface IsNotInSet {
  type: 'isNotInSet';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * List of values to check.
   */
  values: Array<string>;
}
export interface IsInDuration {
  type: 'isInDuration';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format.
   */
  start?: string;
  /**
   * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format.
   */
  end?: string;
}
export interface IsLessThanOrEqualTo {
  type: 'isLessThanOrEqualTo';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * Value to compare to.
   */
  value: string;
}
export interface IsLessThan {
  type: 'isLessThan';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * Value to compare to.
   */
  value: string;
}
export interface DialogPrompts {
  /**
   * Reference to a prompt-id to use If this slot value is missing.
   */
  elicitation?: string;
  /**
   * Reference to a prompt-id to use to confirm the slots value.
   */
  confirmation?: string;
}
export interface IsNotInDuration {
  type: 'isNotInDuration';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format.
   */
  start?: string;
  /**
   * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format.
   */
  end?: string;
}
export interface IsGreaterThanOrEqualTo {
  type: 'isGreaterThanOrEqualTo';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * Value to compare to.
   */
  value: string;
}
export interface IsInSet {
  type: 'isInSet';
  /**
   * The prompt id that should be used if validation fails.
   */
  prompt: string;
  /**
   * List of values to check.
   */
  values: Array<string>;
}
export type SlotValidation =
  | HasEntityResolutionMatch
  | IsLessThanOrEqualTo
  | IsGreaterThan
  | IsNotInSet
  | IsInDuration
  | IsLessThan
  | IsNotInDuration
  | IsGreaterThanOrEqualTo
  | IsInSet;
export interface DialogSlotItems {
  /**
   * The name of the slot that has dialog rules associated with it.
   */
  name: string;
  /**
   * Type of the slot in the dialog intent.
   */
  type: string;
  /**
   * Describes whether elicitation of the slot is required.
   */
  elicitationRequired?: boolean;
  /**
   * Describes whether confirmation of the slot is required.
   */
  confirmationRequired?: boolean;
  prompts: DialogPrompts;
  /**
   * List of validations for the slot. if validation fails, user will be prompted with the provided prompt.
   */
  validations?: Array<SlotValidation>;
}
export interface DialogIntents {
  /**
   * Name of the intent that has a dialog specification.
   */
  name: string;
  /**
   * Defines an intent-specific delegation strategy for this dialog intent. Overrides dialog-level setting.
   */
  delegationStrategy?: DelegationStrategyType;
  /**
   * List of slots that have dialog rules.
   */
  slots?: Array<DialogSlotItems>;
  /**
   * Describes whether confirmation of the intent is required.
   */
  confirmationRequired?: boolean;
  prompts?: DialogIntentsPrompts;
}

export interface Dialog {
  /**
   * Defines a delegation strategy for the dialogs in this dialog model.
   */
  delegationStrategy?: DelegationStrategyType;
  /**
   * List of intents that have dialog rules associated with them. Dialogs can also span multiple intents.
   */
  intents: Array<DialogIntents>;
}

export interface PromptItems {
  type?: SpeechType;
  /**
   * Specifies the prompt.
   */
  value: string;
}

export interface Prompt {
  /**
   * The prompt id, this id can be used from dialog definitions.
   */
  id: string;
  /**
   * List of variations of the prompt, each variation can be either a text string or a well defined ssml string depending on the type defined.
   */
  variations: Array<PromptItems>;
}

export interface InteractionModelSchema {
  languageModel: LanguageModel;
  dialog?: Dialog;
  /**
   * List of prompts.
   */
  prompts?: Array<Prompt>;
}

export interface InteractionModel {
  version?: string;
  description?: string;
  interactionModel: InteractionModelSchema;
}

export abstract class FilePackageWriter {
  abstract writeToPackageFile(baseSkillPackagePath?: string): void;
}

export interface LabeledRequestHandler extends RequestHandler {
  uniqueId: string;
}

export interface LabeledRequestInterceptor extends RequestInterceptor {
  uniqueId: string;
}

export interface LabeledResponseInterceptor extends ResponseInterceptor {
  uniqueId: string;
}

export interface LabeledErrorHandler extends ErrorHandler {
  uniqueId: string;
}

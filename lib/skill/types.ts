import { HandlerInput } from 'ask-sdk-core';
import { Request, Response } from 'ask-sdk-model';

import { IntentStatusProps } from './models';

export type FallbackIntentSensitivityLevel = 'HIGH' | 'MEDIUM' | 'LOW';
export type DelegationStrategyType = 'ALWAYS' | 'SKILL_RESPONSE';
export type IntentHandler<T extends Request> = (input: HandlerInput, status: IntentStatusProps, request: T) => Promise<Response> | Response;
export type JSBErrorHandler = (input: HandlerInput, error: Error) => Promise<Response> | Response;
export type JSBRequestInterceptor = (input: HandlerInput) => Promise<void> | void;
export type JSBResponseInterceptor = (input: HandlerInput, output?: Response) => Promise<void> | void;

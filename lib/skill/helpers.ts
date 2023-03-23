import * as Alexa from 'ask-sdk-core';
import { Request } from 'ask-sdk-model';
import { SHA256 } from 'crypto-js';

import { IntentStatusProps } from './models';
import { IntentHandler } from './types';

export const wrapHandler = <T extends Request>(handler: IntentHandler<T>) => {
  return (input: Alexa.HandlerInput) => {
    const contextApl = input.requestEnvelope.context['Alexa.Presentation.APL'];
    const status: IntentStatusProps = {
      displaySupported: Alexa.getSupportedInterfaces(input.requestEnvelope)['Alexa.Presentation.APL'] ? true : false,
      locale: Alexa.getLocale(input.requestEnvelope),
      aplDocumentToken: contextApl?.token,
      attributesManager: input.attributesManager
    };
    const request = Alexa.getRequest(input.requestEnvelope);
    return handler(input, status, request as T);
  };
};

export const hashValue = (prompt: unknown): string => {
  return SHA256([JSON.stringify(prompt)].join('-'))
    .toString()
    .substring(0, 100);
};

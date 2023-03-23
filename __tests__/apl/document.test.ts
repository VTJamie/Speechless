import { APLContainer, APLDocument, SendEventCommand } from '../../lib/apl';
import { matchSnapshot } from '../helper';

matchSnapshot(
  new APLDocument({
    documentName: 'test-doc',
    dynamicIndexLists: {
      firstindexlist: {
        handler: (input, status, request) => {
          return input.responseBuilder
            .addDirective({
              type: 'Alexa.Presentation.APL.SendIndexListData',
              listId: request.listId,
              correlationToken: request.correlationToken,
              startIndex: 0,
              items: []
            })
            .getResponse();
        },
        items: [],
        startIndex: 0
      }
    },
    dynamicTokenLists: {
      firsttokenlist: {
        handler: (input, status, request) => {
          return input.responseBuilder
            .addDirective({
              type: 'Alexa.Presentation.APL.SendTokenListData',
              listId: request.listId,
              correlationToken: request.correlationToken,
              pageToken: request.pageToken,
              items: []
            })
            .getResponse();
        },
        items: [],
        pageToken: 'firstpage'
      }
    },
    items: [
      new APLContainer({
        items: [],

        onMount: [
          new SendEventCommand({
            uniqueId: 'unique',
            handler: (input) => {
              return input.responseBuilder.getResponse();
            }
          })
        ]
      })
    ]
  }),
  3
);

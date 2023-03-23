import { ModelProvider } from '../lib';
import { RequestHandlerProvider } from '../lib/skill';

export const matchSnapshot = (val: ModelProvider<unknown>, expectedRequestHandlers?: number) => {
  test(val.constructor.name, () => {
    expect(JSON.parse(JSON.stringify(val.model()))).toMatchSnapshot(val.constructor.name);
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if ((val as any).getRequestHandlers !== undefined) {
    test(val.constructor.name + 'RequestHandlers', () => {
      const requestHandlers = (val as unknown as RequestHandlerProvider).getRequestHandlers();
      expect(requestHandlers.length).toBe(expectedRequestHandlers ? expectedRequestHandlers : 0);
    });
  }
};

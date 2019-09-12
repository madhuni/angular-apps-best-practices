import { ServerErrorInterceptor } from './server-error.interceptor';

describe('ServerError', () => {
  it('should create an instance', () => {
    expect(new ServerErrorInterceptor()).toBeTruthy();
  });
});

import { CommaCurrencyPipe } from './comma-currency.pipe';

describe('StringCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CommaCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});

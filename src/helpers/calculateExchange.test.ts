import { calculateExchange } from './calculateExchange';

describe('calculateExchange', () => {
  it('calculates exchange for rate defined for one unit of currency', () => {
    const exchange = calculateExchange(100 /* CZK value */, 22.136 /* CZK/USD rate */);

    expect(exchange).toEqual(4.517528008673654 /* 100 CZK in USD */);
  });

  it('calculates exchange for rate defined for custom units of currency', () => {
    const exchange = calculateExchange(
      100 /* CZK value */,
      16.526 /* CZK/JPY rate */,
      100 /* for 100 JPY */
    );

    expect(exchange).toEqual(605.1071039574005 /* 100 CZK in JPY */);
  });
});

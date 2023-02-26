export const calculateExchange = (
  value: number,
  exchangeRate: number,
  exchangeRateAmount = 1,
  fix?: number
) => {
  const exchange = (value * exchangeRateAmount) / exchangeRate;
  if (fix) {
    return Number(exchange.toFixed(fix));
  } else {
    return exchange;
  }
};

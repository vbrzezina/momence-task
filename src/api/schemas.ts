export type GetExchangeRatesVariables = {
  headers?: {};
  queryParams?: {
    date?: string;
  };
};

export type ExchangeRate = {
  Country: string;
  Currency: string;
  Amount: number;
  Code: string;
  Rate: number;
};

export type ExchangeRatesResponse = {
  date: Date;
  sequenceNumber: number;
  exchangeRates: ExchangeRate[];
};

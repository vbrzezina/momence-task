import * as reactQuery from '@tanstack/react-query';

import { parseCsv } from '../utils/parseCsv';
import { exchangeRatesApiFetch } from './fetcher';
import type * as Schemas from './schemas';

export const fetchDailyExchangeRates = async (
  variables: Schemas.GetExchangeRatesVariables,
  signal?: AbortSignal
): Promise<Schemas.ExchangeRatesResponse> => {
  const response = await exchangeRatesApiFetch({
    url: '/daily.txt',
    method: 'GET',
    signal,
    ...variables,
  });

  const [firstLine, ...rates] = response.split('\n');
  const [date, sequenceNumber] = firstLine.split(' #');

  const exchangeRates = parseCsv(rates.join('\n')) as Schemas.ExchangeRate[];

  return { date: new Date(date), sequenceNumber: Number(sequenceNumber), exchangeRates };
};

export const useGetDailyExchangeRates = <TData = Schemas.ExchangeRatesResponse>(
  variables: Schemas.GetExchangeRatesVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<Schemas.ExchangeRatesResponse, unknown, TData>,
    'queryKey' | 'queryFn'
  >
) => {
  return reactQuery.useQuery<Schemas.ExchangeRatesResponse, unknown, TData>(
    ['daily.txt'],
    ({ signal }) => fetchDailyExchangeRates(variables, signal),
    options
  );
};

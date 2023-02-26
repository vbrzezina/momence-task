const base_url =
  '/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing';

export type ExchangeRatesApiFetcherOptions<THeaders, TQueryParams> = {
  url: string;
  method: string;
  headers?: THeaders;
  queryParams?: TQueryParams;
  signal?: AbortSignal;
};

export async function exchangeRatesApiFetch<THeaders extends {}, TQueryParams extends {}>({
  url,
  method,
  headers,
  queryParams,
  signal,
}: ExchangeRatesApiFetcherOptions<THeaders, TQueryParams>): Promise<string> {
  const requestHeaders: HeadersInit = {
    'Content-Type': 'text/plain',
    ...headers,
  };

  const response = await window.fetch(`${base_url}${resolveUrl(url, queryParams)}`, {
    signal,
    method: method.toUpperCase(),
    headers: requestHeaders,
  });

  if (!response.ok) {
    const errorObject: Error = {
      name: 'Network error',
      message: response.statusText,
    };

    throw errorObject;
  }

  return await response.text();
}

const resolveUrl = (url: string, queryParams: Record<string, string> = {}) => {
  let query = new URLSearchParams(queryParams).toString();
  if (query) query = `?${query}`;
  return url + query;
};

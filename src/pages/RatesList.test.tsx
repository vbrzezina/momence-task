import { render, renderHook, screen, waitFor, wrapper } from 'test-utils';

import { useGetDailyExchangeRates } from '../api/components';
import RatesList from './RatesListPage';

test('renders exchange rates', async () => {
  const { result } = renderHook(() => useGetDailyExchangeRates({}), { wrapper });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  render(<RatesList />);

  const linkElement = screen.getByText('CZK Rates list');
  expect(linkElement).toBeInTheDocument();
});

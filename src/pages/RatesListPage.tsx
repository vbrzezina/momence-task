import { Helmet } from 'react-helmet';

import { Typography } from '@mui/material';

import { useGetDailyExchangeRates } from '../api';
import ExchangeRatesTable from '../components/ExchangeRatesTable';

function RatesList() {
  const { data } = useGetDailyExchangeRates({});

  return (
    <>
      <Helmet>
        <title>CZK Rates list</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>
        CZK Rates list
      </Typography>
      <Typography variant="h6" gutterBottom>
        Valid for {data?.date.toDateString()}, order: {data?.sequenceNumber}
      </Typography>
      <ExchangeRatesTable exchangeRates={data?.exchangeRates || []} />
    </>
  );
}

export default RatesList;

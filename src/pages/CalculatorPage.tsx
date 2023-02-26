import { Helmet } from 'react-helmet';

import { Typography } from '@mui/material';

import { useGetDailyExchangeRates } from '../api';
import { ExchangeRatesForm } from '../components/ExchangeRatesForm';

function Calculator() {
  const { data } = useGetDailyExchangeRates({});

  return (
    <>
      <Helmet>
        <title>Exchange CZK</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>
        Exchange CZK
      </Typography>
      <Typography variant="h6" gutterBottom>
        Valid for {data!.date.toDateString()}, order: {data!.sequenceNumber}
      </Typography>
      <ExchangeRatesForm exchangeRates={data!.exchangeRates} />
    </>
  );
}

export default Calculator;

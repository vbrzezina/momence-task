import { Controller, useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { FormGroup, InputLabel, Select, Stack, TextField, Typography } from '@mui/material';

import { ExchangeRate } from '../api';
import { calculateExchange } from '../helpers/calculateExchange';

interface ExchangeRatesFormValues {
  to: string;
  amount: number;
  fix: number;
}

interface ExchangeRatesFormProps {
  exchangeRates: ExchangeRate[];
}

export const ExchangeRatesForm = ({ exchangeRates }: ExchangeRatesFormProps) => {
  const { control, watch } = useForm<ExchangeRatesFormValues>({
    defaultValues: {
      to: 'EUR',
      amount: 1000,
      fix: 4,
    },
  });

  const to = watch('to');
  const fix = watch('fix');
  const amount = watch('amount');

  const exchangeRate = exchangeRates.find((exchangeRate) => exchangeRate.Code === to);
  const result = calculateExchange(amount, exchangeRate!.Rate, exchangeRate?.Amount, fix);

  return (
    <>
      <Stack direction="row" spacing={3} mt={1}>
        <FormGroup>
          <InputLabel htmlFor="amount">Amount in CZK</InputLabel>
          <Controller<ExchangeRatesFormValues>
            name="amount"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <NumericFormat inputRef={ref} customInput={TextField} id="amount" {...field} />
            )}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="to">To</InputLabel>
          <Controller<ExchangeRatesFormValues>
            name="to"
            control={control}
            render={({ field }) => (
              <Select id="to" native variant="outlined" {...field}>
                {exchangeRates.map((option) => (
                  <option key={option.Code} value={option.Code}>
                    {option.Code}
                  </option>
                ))}
              </Select>
            )}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="fix">To fixed</InputLabel>
          <Controller<ExchangeRatesFormValues>
            name="fix"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <NumericFormat
                inputRef={ref}
                decimalScale={0}
                defaultValue={0}
                isAllowed={({ floatValue }) => !floatValue || (floatValue > 0 && floatValue <= 10)}
                customInput={TextField}
                id="fix"
                {...field}
              />
            )}
          />
        </FormGroup>
      </Stack>
      <Typography variant="h6" mt={2}>
        Amount in {to}: {result}
      </Typography>
    </>
  );
};

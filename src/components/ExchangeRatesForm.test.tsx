import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExchangeRatesForm } from './ExchangeRatesForm';

const exchangeRates = [
  { Country: 'Australia', Currency: 'dollar', Amount: 1, Code: 'AUD', Rate: 15.09 },
  { Country: 'EMU', Currency: 'euro', Amount: 1, Code: 'EUR', Rate: 23.64 },
  { Country: 'USA', Currency: 'dollar', Amount: 1, Code: 'USD', Rate: 22.369 },
];

describe('ExchangeRatesForm', () => {
  it('renders the form', () => {
    render(<ExchangeRatesForm exchangeRates={exchangeRates} />);

    expect(screen.getByLabelText('Amount in CZK')).toBeInTheDocument();
    expect(screen.getByLabelText('To')).toBeInTheDocument();
    expect(screen.getByLabelText('To fixed')).toBeInTheDocument();
  });

  it('sets default values', () => {
    render(<ExchangeRatesForm exchangeRates={exchangeRates} />);

    expect(screen.getByLabelText('Amount in CZK')).toHaveValue('1000');
    expect(screen.getByLabelText('To')).toHaveValue('EUR');
    expect(screen.getByLabelText('To fixed')).toHaveValue('4');
    expect(screen.getByText('Amount in EUR: 42.3012')).toBeInTheDocument();
  });

  it('calculates exchange correctly', () => {
    render(<ExchangeRatesForm exchangeRates={exchangeRates} />);

    act(() => {
      userEvent.clear(screen.getByLabelText('Amount in CZK'));
      userEvent.type(screen.getByLabelText('Amount in CZK'), '100');

      userEvent.selectOptions(screen.getByLabelText('To'), 'USD');

      userEvent.clear(screen.getByLabelText('To fixed'));
      userEvent.type(screen.getByLabelText('To fixed'), '2');
    });

    expect(screen.getByLabelText('Amount in CZK')).toHaveValue('100');
    expect(screen.getByLabelText('To')).toHaveValue('USD');
    expect(screen.getByLabelText('To fixed')).toHaveValue('2');
    expect(screen.getByText('Amount in USD: 4.47')).toBeInTheDocument();
  });
});

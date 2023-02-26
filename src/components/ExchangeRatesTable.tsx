import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ExchangeRate } from '../api';

interface ExchangeRatesTableProps {
  exchangeRates: ExchangeRate[];
}

export default function ExchangeRatesTable({ exchangeRates }: ExchangeRatesTableProps) {
  const columns: Array<GridColDef<ExchangeRate>> = [
    { field: 'Country', headerName: 'Country', flex: 1 },
    {
      field: 'Currency',
      headerName: 'Currency',
      flex: 1,
    },
    {
      field: 'Amount',
      headerName: 'Amount',
      flex: 1,
    },
    {
      field: 'Code',
      headerName: 'Code',
      flex: 1,
    },
    {
      field: 'Rate',
      headerName: 'Rate',
      flex: 1,
    },
  ];

  return (
    <DataGrid<ExchangeRate> getRowId={(row) => row.Code} rows={exchangeRates} columns={columns} />
  );
}

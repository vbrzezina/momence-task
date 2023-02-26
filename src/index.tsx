import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './api/client';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Loader from './components/Loader';
import { NotFoundPage } from './pages/NotFoundPage';
import { theme } from './theme';
import reportWebVitals from './utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const Calculator = lazy(() => import('./pages/CalculatorPage'));
const RatesList = lazy(() => import('./pages/RatesListPage'));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Router>
            <Layout>
              <Suspense fallback={<Loader />}>
                <ErrorBoundary>
                  <Routes>
                    <Route path="/" element={<RatesList />} />
                    <Route path="/calculate" element={<Calculator />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </ErrorBoundary>
              </Suspense>
            </Layout>
          </Router>
        </ErrorBoundary>
      </Suspense>
    </QueryClientProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

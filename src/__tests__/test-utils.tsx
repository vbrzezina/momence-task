import React, { ReactElement, Suspense } from 'react';

import { ThemeProvider } from '@mui/material';

import { QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';

import { queryClient } from '../api/client';
import ErrorBoundary from '../components/ErrorBoundary';
import Loader from '../components/Loader';
import { theme } from '../theme';

export const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };

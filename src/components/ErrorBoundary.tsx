import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { ErrorOutline } from '@mui/icons-material';

import { Box, Button, Stack, Typography } from '@mui/material';

import { QueryErrorResetBoundary } from '@tanstack/react-query';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return (
    <>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ReactErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary, error }) => (
              <Stack flex={1} justifyContent="center" alignItems="center">
                <ErrorOutline fontSize="large" />
                <Typography variant="h5" mt={2}>
                  {error.name}
                </Typography>
                {process.env['NODE_ENV'] !== 'production' && (
                  <Typography variant="subtitle2" my={2} textAlign="center">
                    {error.message}
                  </Typography>
                )}
                {error.name === 'Network error' && (
                  <Box mt={1}>
                    <Button onClick={() => resetErrorBoundary()}>Try again</Button>
                  </Box>
                )}
              </Stack>
            )}
          >
            {children}
          </ReactErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  );
};

export default ErrorBoundary;

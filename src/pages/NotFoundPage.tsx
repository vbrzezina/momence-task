import { Link as RouterLink } from 'react-router-dom';

import { Link, Typography } from '@mui/material';

import { styled } from '@mui/system';

export const NotFoundWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`;

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4" mb={1.5}>
        Page not found
      </Typography>
      <Link component={RouterLink} variant="body2" underline="hover" to="/">
        Go to main page
      </Link>
    </NotFoundWrapper>
  );
};

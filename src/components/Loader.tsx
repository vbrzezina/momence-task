import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;

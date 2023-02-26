import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';

import { AccountBalance, CurrencyExchange, Money } from '@mui/icons-material';

import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';

const StyledDrawer = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;
  z-index: 1;

  & .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
    position: fixed;
    top: 64px;
  }
`;

// TODO: Find out if this is the right patter or it's better to pass the props to the styled component in JSX
StyledDrawer.defaultProps = {
  variant: 'permanent',
};

const StyledAppBar = styled(AppBar, {})`
  z-index: 2;
`;

const StyledBrandLink = styled(RouterLink)`
  color: white;
  text-decoration: none;

  & > * {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const StyledLayout = styled('div')`
  display: flex;
  flex-direction: row;
  padding-top: 64px;
`;

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet titleTemplate="%s - Exchange office">
        <title>Exchange office</title>
      </Helmet>
      <StyledLayout>
        <StyledAppBar position="fixed">
          <Toolbar>
            <StyledBrandLink to="/">
              <Typography variant="h6">
                <AccountBalance /> Exchange office
              </Typography>
            </StyledBrandLink>
          </Toolbar>
        </StyledAppBar>
        <StyledDrawer>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/">
                <ListItemIcon>
                  <Money />
                </ListItemIcon>
                <ListItemText>CZK Rates list</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/calculate">
                <ListItemIcon>
                  <CurrencyExchange />
                </ListItemIcon>
                <ListItemText>Exchange CZK</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </StyledDrawer>
        <Box component="main" display="flex" flexDirection="column" flexGrow={1} p={3}>
          {children}
        </Box>
      </StyledLayout>
    </>
  );
}

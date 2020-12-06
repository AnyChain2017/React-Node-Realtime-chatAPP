import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/auth';
import UserButtonsDesktop from './UserButtonsDesktop';
import ChatIcon from '../svg/chat.svg';

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const NavBar = () => {
  const { user, logoutUser } = useAuthContext();
  const history = useHistory();
  const classes = useNavStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleLogout = () => {
    logoutUser();
    history.push('/login');
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar variant="dense">
        <div className={classes.leftPortion}>
          <div className={classes.logoWrapper}>
            <Button
              className={classes.logoBtn}
              component={RouterLink}
              to="/"
              color="primary"
            >
              <img
                src={ChatIcon}
                alt="leschat-logo"
                className={classes.svgImage}
              />
              LesChat
            </Button>
            {!isMobile && (
              <Typography variant="caption" color="secondary">
                Made with{' '}
                <FavoriteIcon style={{ fontSize: 10, color: '#f4649f' }} /> by
                <Link
                  href={'https://github.com/amand33p'}
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>{` amand33p`}</strong>
                </Link>
              </Typography>
            )}
          </div>
        </div>
        <UserButtonsDesktop
          user={user}
          handleLogout={handleLogout}
          isMobile={isMobile}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

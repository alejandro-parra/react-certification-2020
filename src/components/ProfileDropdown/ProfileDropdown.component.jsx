import React, { useState, useRef, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import GoogleLogin from 'react-google-login';
import { Container, ProfileImage } from './ProfileDropdown.styled';
import { useAuth } from '../../providers/Auth';
import { useGlobalState } from '../../state/GlobalStateProvider';

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const { state } = useGlobalState();
  const { login, logout, authenticated } = useAuth();
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleSuccess = (response) => {
    login(response.profileObj);
  };

  return (
    <>
      <Container onClick={handleToggle} ref={anchorRef}>
        <ProfileImage image={state.userInfo ? state.userInfo.imageUrl : ''} />
        <ArrowDropDownIcon color="primary" />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    {!authenticated
                      ? [
                          <GoogleLogin
                            clientId={clientId}
                            render={(renderprops) => (
                              <MenuItem onClick={renderprops.onClick}>
                                Inicia sesión
                              </MenuItem>
                            )}
                            buttonText="Inicia sesión"
                            onSuccess={(response) => handleSuccess(response)}
                            onFailure={handleClose}
                            cookiePolicy="single_host_origin"
                            key="loginButton"
                          />,
                        ]
                      : [
                          <MenuItem key="videosButton">Videos</MenuItem>,
                          <MenuItem key="favoritesButton">Favoritos</MenuItem>,
                          <MenuItem key="logoutButton" onClick={logout}>
                            Cerrar Sesión
                          </MenuItem>,
                        ]}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Container>
      {}
    </>
  );
};

export default ProfileDropdown;
// {state.menuItems.map((menuItem) => {
//   return (
//     <MenuItem
//       onClick={() => {
//         menuItem.handler();
//         handleClose();
//       }}
//     >
//       {menuItem.description}
//     </MenuItem>
//   );
// })}

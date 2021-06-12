import React from 'react';
import { useHistory } from 'react-router';
import { useGlobalState } from '../../state/GlobalStateProvider';
import Searchbar from '../Searchbar/Searchbar.component';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown.component';
import logo from '../../assets/youtube-logo.png';
import Toggle from '../Toggle/Toggle.component';
import { Navbar, LeftContainer, RightContainer, Logo } from './Header.styled';

const Header = () => {
  const { state, dispatch } = useGlobalState();
  const history = useHistory();

  const navigateHome = () => {
    state.setSearch('');
    history.push({
      pathname: '/',
      state: {
        searchString: '',
        mode: 'search',
      },
    });
  };

  return (
    <Navbar>
      <LeftContainer>
        <Logo src={logo} alt="Logo" onClick={navigateHome} />
      </LeftContainer>
      <Searchbar setSearch={state.setSearch} />
      <RightContainer>
        <Toggle
          changeHandler={() => dispatch({ type: 'TOGGLE_THEME' })}
          isChecked={state.theme === 'dark'}
        />
        <ProfileDropdown />
      </RightContainer>
    </Navbar>
  );
};

export default Header;

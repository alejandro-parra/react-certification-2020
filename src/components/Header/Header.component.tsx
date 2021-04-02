import React from 'react';
import Searchbar from '../Searchbar/Searchbar.component';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown.component';
import logo from '../../assets/youtube-logo.png';
import Toggle from '../Toggle/Toggle.component';
import { Navbar, LeftContainer, RightContainer, Logo } from './Header.styled';

const Header = ({ items, image }) => {
  return (
    <Navbar>
      <LeftContainer>
        <Logo src={logo} alt="Logo" />
      </LeftContainer>
      <Searchbar />
      <RightContainer>
        <Toggle />
        <ProfileDropdown items={items} image={image} />
      </RightContainer>
    </Navbar>
  );
};

export default Header;

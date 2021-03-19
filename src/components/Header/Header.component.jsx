import React from 'react';
import styled from 'styled-components'
import Searchbar from '../Searchbar/Searchbar.component'
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown.component'
import logo from '../../assets/youtube-logo.png'
import Toggle from '../Toggle/Toggle.component';

const Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background-color: #f3f3f3cc;
    backdrop-filter: blur(4px);
    box-shadow: 0px 2px 8px rgba(18, 45, 69, 0.2);
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const Logo = styled.img`
    height: 5rem;
    &:hover {
        cursor: pointer;
    }
    
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 20%;
`;

const LeftContainer = styled(Container)`
    justify-content: flex-start;
`;

const RightContainer = styled(Container)`
    justify-content: flex-end;
`;

const Header = ({items, image}) => {
    return(
        <Navbar>
            <LeftContainer>
                <Logo src={logo} alt="Logo"/>
            </LeftContainer>
            <Searchbar></Searchbar>
            <RightContainer>
                <Toggle/>
                <ProfileDropdown items={items} image={image}/>
            </RightContainer>
            
        </Navbar>
    );
};

export default Header;
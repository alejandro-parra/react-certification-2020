import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Container, ProfileImage } from './ProfileDropdown.styled';

const ProfileDropdown = ({ image }) => {
  return (
    <>
      <Container>
        <ProfileImage image={image} />
        <ArrowDropDownIcon color="primary" />
      </Container>
      {/* <Popover 
        open={open}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        >
            {
                items.map(({title, click}) => {
                    return <MenuItem onClick={click} key={title}>{title}</MenuItem>
                })
            }
        </Popover> */}
    </>
  );
};

export default ProfileDropdown;

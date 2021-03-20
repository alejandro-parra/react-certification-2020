import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const ProfileImage = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: black;
  background-image: ${(props) => props.image};
  border-radius: 1.5rem;
`;

// const MenuItem = styled.p`
//     color: black;
//     background-color: white;
//     border-bottom: 1px solid black;
//     padding: 0.5rem;
//     text-align: start;

//     &:hover{
//         cursor: pointer;
//         background-color: gray;
//     }
// `;

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

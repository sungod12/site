import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, styled, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import Search from './Search';
import { Menu } from '@mui/icons-material';
import AmfashionLogoImg from "../images/AmfashionLogoImg.png"


const StyledHeader = styled(AppBar)`
    // background: #99abff;
    // background-image: linear-gradient( 180.3deg,  rgba(214,224,255,1) 37.2%, rgba(254,168,168,1) 137.3% );
    // background-image: linear-gradient( 110.6deg,  rgba(179,157,219,1) 7%, rgba(150,159,222,1) 47.7%, rgba(24,255,255,1) 100.6% );
    // background-image: radial-gradient( circle farthest-corner at 7.2% 13.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% );
    height: 70px;
    background: rgb(206,225,255);
background: linear-gradient(90deg, rgba(206,225,255,1) 0%, rgba(255,168,180,1) 100%);
    // background-image: linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% );
`;
const Component = styled(Link)`
    margin-left: 2%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));


const Header = () => {
  const logoURL = AmfashionLogoImg.png;


  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }

  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
        <listItem button>
          <CustomButtons />
        </listItem>
      </List>
    </Box>
  );


  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 70 }}>
        <MenuButton
          color="inherit"
          onClick={handleOpen}
        >
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to='/'>
          <img src={AmfashionLogoImg} alt="none" style={{ height: '60px',
          width:' 190px',
          margin: '5px',}} />
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header

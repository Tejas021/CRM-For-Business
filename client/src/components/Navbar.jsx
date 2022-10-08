import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/auth';


const drawerWidth = 240;
const navItems = [{ name: "Home", link: "" }, { name: "Tickets", link: "tickets" }, { name: "Tasks", link: "tasks" }];


function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user = useSelector(state=>state.auth.currentUser)
  const dispatch = useDispatch()
  console.log(user)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const displayNav = (name)=> {
    if(user.role === 'client' && name==='Tasks'){
      return 0
    } else {
      return 1
    }
    
  }
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      {
        user ?
        <List>
        {navItems.map((item) => (

          <ListItem style={{
           opacity: displayNav(item.name),
          }} key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.link}`}> <ListItemText primary={item.name} /></Link>

            </ListItemButton>
          </ListItem>

        ))}

        <ListItem>
        <ListItemButton  sx={{ textAlign: 'center' }}>
        <ListItemText primary={"LOGOUT"} />
        </ListItemButton>
        </ListItem>
      </List> : ''
      }
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background: "blue" }}>
      <AppBar component="nav" style={{ display: 'flex', background: "blue", paddingInline: "50px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CRM
          </Typography>
         { user && <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#fff',marginInline:"10px",opacity:displayNav(item.name) }}>
              <Link style={{textDecoration:"none",color:"white"}} to={`/${item.link}`}>{item.name}</Link>
              </Button>
            ))}

            <Button  sx={{ color: '#fff' }} onClick={()=>{dispatch(logout())}}>
         LOGOUT
            </Button>
          </Box>}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Routes from '../../Config/Routes';
import logo from '../../assets/logo.png'
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import { Avatar, Menu, MenuItem, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  background:"rgb(81, 94, 193)",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{
            position:"absolute",
            right:0,
            display:"flex",
            cursor:"pointer"
          }}
          onClick={handleClick}
          >
            <Avatar>A</Avatar>
            <Typography style={{fontSize:"25px",marginLeft:"25px"}}>Akbar</Typography>
            <KeyboardArrowDownIcon style={{fontSize:"35px",marginLeft:"25px"}}/>
          </div>
          <Paper>
          <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              sx={{ width: 320, maxWidth: '100%' }}
            >
              <MenuItem onClick={handleClose}><AccountCircleIcon style={{marginRight:"15px"}}/>Profile</MenuItem>
              <MenuItem onClick={()=>{
                handleClose();
                history.push('/')
                localStorage.removeItem('rdprjt')
                window.location.reload();
              }}><LogoutIcon style={{marginRight:"15px"}}/>Logout</MenuItem>
            </Menu>
          </Paper>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:"rgb(81, 94, 193)",
            color:"#FFF"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <img src={logo} alt="pic" style={{width:"80%"}}/> 
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
            <ListItem>
            <div>
            <ListItem Button>
                <Icon icon="bx:bxs-dashboard" style={{fontSize:"25px",marginRight:"5px"}}/>
                <Typography>Dashboard</Typography>
            </ListItem>
            <Accordion>
            <div style={{position:"relative",width:"100%"}}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Icon icon="tabler:discount-2" style={{fontSize:"25px",marginRight:"5px"}}/>
            <Typography>Penjualan</Typography>
            <ExpandMoreIcon style={{
              position:"absolute",
              right:0
            }}/>
            </AccordionSummary>
            </div>
                <AccordionDetails>
                  <List>
                    <ListItem onClick={()=>{
                      history.push('/penjualan-store')
                    }}>
                    <ListItemText primary="Penjualan Store" />
                    </ListItem>
                    <ListItem onClick={()=>{
                      history.push('/penjualan-office')
                    }}>
                    <ListItemText primary="Penjualan Office" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <ListItem onClick={()=>{
                      history.push('/pembelian')
                    }}>
                <Icon icon="icons8:buy" style={{fontSize:"25px",marginRight:"5px"}}/>
                <Typography>Pembelian</Typography>
            </ListItem>
              <Accordion>
                <AccordionSummary
                  
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                   <Icon icon="eos-icons:product-classes" style={{fontSize:"25px",marginRight:"5px"}}/>
                    <Typography>Penyimpanan</Typography>
                    <ExpandMoreIcon style={{
                      position:"absolute",
                      right:0
                    }}/>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem onClick={()=>{
                      history.push('/penyimpanan/barang-masuk')
                    }}>
                    <ListItemText primary="Barang Masuk" />
                    </ListItem>
                    <ListItem onClick={()=>{
                      history.push('/penyimpanan/barang-keluar')
                    }}>
                    <ListItemText primary="Barang Keluar" />
                    </ListItem>
                    <ListItem onClick={()=>{
                      history.push('/penyimpanan/stock-opname')
                    }}>
                    <ListItemText primary="Stock Opname" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                   <Icon icon="mdi:truck-delivery-outline" style={{fontSize:"25px",marginRight:"5px"}}/>
                    <Typography>Pengiriman</Typography>
                    <ExpandMoreIcon style={{
                      position:"absolute",
                      right:0
                    }}/>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem>
                    <ListItemText primary="Dari Gudang ke Store" />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Dari Store ke Store" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                   <Icon icon="ri:folder-received-line" style={{fontSize:"25px",marginRight:"5px"}}/>
                    <Typography>Penerimaan</Typography>
                    <ExpandMoreIcon style={{
                      position:"absolute",
                      right:0
                    }}/>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                   <Icon icon="mdi:cash-check" style={{fontSize:"25px",marginRight:"5px"}}/>
                    <Typography>Kas</Typography>
                    <ExpandMoreIcon style={{
                      position:"absolute",
                      right:0
                    }}/>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                   <Icon icon="akar-icons:shipping-box-v1" style={{fontSize:"25px",marginRight:"5px"}}/>
                    <Typography>Produk</Typography>
                    <ExpandMoreIcon style={{
                        position:"absolute",
                        right:0
                      }}/>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <ListItem>
                <Icon icon="clarity:group-solid" style={{fontSize:"25px",marginRight:"5px"}}/>
                <Typography>Pelanggan</Typography>
            </ListItem>
              <Accordion>
                <AccordionSummary
                  
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                   <Icon icon="clarity:employee-solid" style={{fontSize:"25px",marginRight:"5px"}}/>
                    <Typography>Karyawan</Typography>
                    <ExpandMoreIcon style={{
                      position:"absolute",
                      right:0
                    }}/>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <ListItem>
                <Icon icon="fa-solid:people-arrows" style={{fontSize:"25px",marginRight:"5px"}}/>
                <Typography>Pemasok</Typography>
            </ListItem>
            <ListItem>
                <Icon icon="carbon:report-data" style={{fontSize:"25px",marginRight:"5px"}}/>
                <Typography>Laporan</Typography>
            </ListItem>
              <Accordion>
                <AccordionSummary
                  
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                   <Icon icon="ant-design:idcard-filled" style={{fontSize:"25px",marginRight:"5px"}}/>
                    <Typography>Master</Typography>
                    <ExpandMoreIcon style={{
                        position:"absolute",
                        right:0
                      }}/>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                      <Icon icon="bx:bxs-dashboard"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              </div>
            </ListItem>
        </List>

      </Drawer>
      <Main open={open}>
          <Routes/>
      </Main>

    </Box>
  );
}

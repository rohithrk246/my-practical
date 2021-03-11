import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import '../App.css';
import Router from '../Routes/Router';
import {Link} from 'react-router-dom';



const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    marginRight:"10px",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    margin:10,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.05),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(5),
      width: '300px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

 
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>

      <Drawer
       
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open} 
        classes={{
          paper: classes.drawerPaper,
        }} >
      
        <div className={classes.drawerHeader}>
        <h1 style={{marginRight:"20px"}}>Ticket Lite</h1>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon/>
          </IconButton>
        </div>
        <Divider />
        <List>
          
          <Link  to="dashboard" >

            <ListItem button >
            <ListItemIcon color="white"><HowToRegIcon/></ListItemIcon>
              <ListItemText> Dashboard</ListItemText>
            </ListItem>

            </Link>
            <Divider />
            <Link  to="Contracts" >

                <ListItem button >
                  <ListItemIcon color="white"><CollectionsBookmarkIcon/></ListItemIcon>
                  <ListItemText> Contracts</ListItemText>
                </ListItem>

            </Link>
            <Divider />
            <Link  to="Addcontracts" >

                <ListItem button >
                <ListItemIcon color="white"><ControlPointIcon/></ListItemIcon>
                  <ListItemText> Add Contracts</ListItemText>
             </ListItem>

            </Link>
            <Divider />

        </List>
       </Drawer>


       <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>   
          <div className={classes.grow} />
          <IconButton color="inherit">
            <ControlPointIcon/>
          </IconButton>       
          <IconButton color="inherit">
              <NotificationsActiveIcon />
          </IconButton>   

          <IconButton color="inherit">
             < AccountCircleIcon/>
          </IconButton>       
        </Toolbar>
      </AppBar>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
        <Router/>
      </main>
    </div>
  );
}

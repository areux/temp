import * as React from 'react';
import { useState } from 'react';
import './Header.scss';
import {
    AppBar, Box, Toolbar, Button, Typography,
    List, ListItemText, ListItem, ListItemIcon,
    Menu, MenuItem, TextField, Paper, InputBase,
    useScrollTrigger, Slide, CssBaseline, Container, IconButton, Drawer, Avatar, Grid
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/LightModeOutlined';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LoginIcon from '@mui/icons-material/Login';
import FaceIcon from '@mui/icons-material/Face';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useMatchMedia } from '../utils/screen';
import Nav from './Drawer';
import ThemeModeToggle from './ThemeModeToggle';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import NavBar from './NavBar';


const navListTransKeys = [
    'home',
    'about',
];

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    threshold?: number;
    scroller?: Window;
    cc?: any;
    children: React.ReactElement;
}

const StarIcon = () => {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
    );
}

function AccountMenu() {
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex', alignItems: 'center', textAlign: 'center'
            }}>
                <Tooltip title={t('account_settings') || "Account Settings"}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>{t('m')}</Avatar>
                    </IconButton>

                </Tooltip>
            </Box>
            <Menu
                disableScrollLock={true}
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> {t('profile')}
                </MenuItem>
                <MenuItem>
                    <Avatar /> {t('my_account')}
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    {t('settings')}
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {t('logout')}
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

function CustomizedInputBase() {
    const { t } = useTranslation();
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={t('search')}
                size="small"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
            {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DirectionsIcon />
            </IconButton> */}
        </Paper>
    );
}

type NavAnchor = 'left' | 'right'

const StarAppBar = (props: Props) => {
    const { t } = useTranslation();
    const {
        navDrawer,
        drawerState,
        setDrawerState,
    } = Nav('left');

    return (
        <>
            <Toolbar disableGutters sx={{
                m: 0, p: 0,
                overflow: "hidden",
                // border: 5,
                // borderColor: 'black',
            }}>
                {/* <Drawer
                    disableScrollLock={true}
                    anchor="left"
                    PaperProps={{
                        style: { left: "unset", right: 0 },
                    }}
                    sx={{
                    }}
                    open={drawerState}
                    onClose={() => setDrawerState(false)}
                >
                    {navDrawer}
                </Drawer> */}
                <CustomizedInputBase />
                {/* <NavBar /> */}
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    <Grid item xs={1}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="secondary"
                            aria-label="menu"
                            onClick={() =>
                                setDrawerState(!drawerState)
                            }
                        // sx={{
                        //     m: 0
                        // }}
                        >
                            {/* <MenuIcon /> */}
                            {/* <AccountMenu /> */}
                            {/* <LoginMenu /> */}
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            // ml: 0,
                        }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            m: 0
                        }}>
                            <AccountMenu />
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    );
}

const Header = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <AppBar
                sx={{
                    position: 'sticky',
                    m: 0,
                    p: 0,
                    // color: "transparent",
                    // color: (theme) => alpha('#d400ff', 0.3),
                    boxShadow: 2,
                    // borderBottom: 1,
                    top: '0px',
                    backdropFilter: "blur(20px)",
                    // bgcolor: (theme) => alpha('#1C9CEA', 1.0),
                    bgcolor: (theme) => alpha('#001dff', 1.0),

                }}
            >
                <Container disableGutters={true}>
                    <StarAppBar {...props} />
                    <NavBar />
                </Container>
            </AppBar>
        </>
    );
}


export default Header;
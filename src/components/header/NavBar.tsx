import * as React from 'react';
import { useState } from 'react';
import {
    AppBar, Box, Toolbar, Button, Typography,
    List, ListItemText, ListItem, ListItemIcon,
    Menu, MenuItem, TextField, Paper, InputBase, Tab, Tabs, Popper, MenuList,
    withStyles,
    useScrollTrigger, Slide, CssBaseline, Container, IconButton, Drawer, Avatar, Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InboxIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from 'react-i18next';
import './NavBar.scss';
import { RttRounded } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const items = [
        { pathName: "/test", label: t('ttdropdown1') },
        { pathName: "/test", label: t('ttdropdown2') },
        { pathName: "/test", label: t('ttdropdown3') }
    ];
    const subItems = [t('ttlink1'), t('ttlink2'), t('ttlink3')];

    const xitems = [{
        name: t('ttlink1'),
        link: '/'
    },
    {
        name: t('ttlink2'),
        link: '/preferences',
    },
    {
        name: t('about'),
        link: '/aboutus',
    }
    ];

    const handleMenuClick = (index: any) => { };

    const handleMenuOpen = (index: any, event: any) => {
        const { currentTarget } = event;

        setOpen(true);
        setAnchorEl(currentTarget);
        setValue(index);
    };

    const handleMenuClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    const handleInputSearch = () => { };

    return (
        <>
            <Box sx={{
                float: 'left',
            }}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="inherit"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: 'white',
                        }
                    }}
                    centered
                >
                    {items.map((item, index) => (
                        <Tab
                            key={index + 1}
                            value={index + 1}
                            onMouseOver={handleMenuOpen.bind(this, index + 1)}
                            data-key={index + 1}
                            // classes={{ root: classes.tabItem }}
                            label={item.label}
                            aria-owns={open ? "menu-list-grow" : undefined}
                            aria-haspopup={"true"}
                        />
                    ))}
                </Tabs>
                <Popper
                    style={{
                        zIndex: 10000,
                    }}
                    open={open} anchorEl={anchorEl} id="menu-list-grow"
                    onMouseLeave={handleMenuClose}
                >
                    <Paper
                        sx={{
                            zIndex: 20000,
                        }}
                    >
                        <MenuList>
                            {xitems.map(({ name, link }: any, index) => (
                                <MenuItem
                                    component={RouterLink}
                                    to={link}
                                    key={index}
                                    onClick={handleMenuClose}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Paper>
                </Popper>
            </Box>
        </>
    );
};

export default NavBar;
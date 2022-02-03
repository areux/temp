import * as React from 'react';
import { useState } from 'react';
import { Box, Collapse, Divider, FormControlLabel, FormGroup, IconButton, List, ListItem, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from 'react-i18next';
import Copyright from '../../Copyright';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const navItems = [
    'home',
    'about',
];

type NavAnchor = 'left' | 'right';

interface NavSt {
    navDrawer: React.ReactElement;
    drawerState: boolean;
    setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings = ({
    settingsState,
    setSettingsState,
}: {
    settingsState: boolean,
    setSettingsState: any,
}) => {
    return (
        <>
            <Box
            >
                <Collapse in={settingsState} sx={{
                    mx: 1,
                }}>
                    <Box
                        sx={{
                            bgcolor: 'orange',
                        }}
                    >
                        <FormGroup>
                            <FormControlLabel disabled control={<Switch />} label="disabled" labelPlacement="start" />
                        </FormGroup>
                    </Box>
                </Collapse>
            </Box>
        </>
    );
}

const NavSettingsBar = () => {
    const [settingsState, setSettingsState] = useState(false);
    return (
        <>
            <Box
                sx={{
                    m: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <IconButton
                    size="large"
                    edge="start"
                    onClick={() => setSettingsState(!settingsState)}
                >
                    <SettingsIcon />
                </IconButton>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                        mx: 1,
                    }}
                />
                <IconButton
                    size="large"
                >
                    <DarkModeIcon />
                </IconButton>
            </Box>
            <Settings settingsState={settingsState} setSettingsState={setSettingsState} />
        </>
    );
}

const Nav = (navAnchor: NavAnchor): NavSt => {
    const { t } = useTranslation();
    const [drawerAnchorState, setDrawerAnchorState] = useState({
        left: false,
        right: false,
    });
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (anchor: NavAnchor, open: Boolean) => {
        return (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }
            setDrawerAnchorState({ ...drawerAnchorState, [anchor]: open })
        }
    }

    const navDrawer = (
        <Box
            sx={{
                width: 250,
                height: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
            role="presentation"
            onClick={toggleDrawer(navAnchor, false)}
            onKeyDown={toggleDrawer(navAnchor, false)}
        >
            <Box
                sx={{
                    display: "flex",
                    width: 1,
                    flexDirection: "column",
                }}
            >
                <NavSettingsBar />
                {/* <NavSettingsBar settingsState={settingsState} setSettingsState={setSettingsState} >
                    <Settings settingsState={settingsState} setSettingsState={setSettingsState} />
                </NavSettingsBar> */}
                <List sx={{ mx: 1 }}>
                    {navItems.map(x => t(x)).map((text, index) => (
                        <ListItem button key={text} sx={{
                            boxShadow: 0,
                        }}>
                            {/* <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon> */}
                            <ListItemText primary={text}>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{
                width: 1,
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                fontSize: 13,
            }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box sx={{
                    m: 2,
                    p: 1 / 2,
                    display: "flex",
                    border: 1,
                    borderColor: 'grey.400',
                    borderRadius: 2,
                    bgcolor: 'grey.100',
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    textAlign: "center",
                }}>
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );

    const r: NavSt = {
        navDrawer,
        drawerState,
        setDrawerState,
    };
    return r;
};

export default Nav;
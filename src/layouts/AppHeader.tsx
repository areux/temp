import * as React from 'react';
import { Container, useMediaQuery } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ThemeModeToggle from '../header/ThemeModeToggle';

const Header = styled('header')(({ theme }) => ({
    position: "sticky",
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backdropFilter: 'blur(20px)',
    boxShadow: `inset 0px -1px 1px ${
        theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100]
    }`,
    backgroundColor:
        theme.palette.mode === 'dark'
            ? alpha(theme.palette.primaryDark[900], 0.72)
            : 'rgba(255,255,255,0.72)',
}));

export default function AppHeader() {
    const [mode, setMode] = React.useState<string | null>(null);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const handleChangeThemeMode = (checked: boolean) => {
        const paletteMode = checked ? 'dark' : 'light';
        setMode(paletteMode);

        document.cookie = `paletteMode=${paletteMode};path=/;max-age=31536000`;
        // TODO: 
    }

    return (
        <Header>
            <Container sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
                {mode !== null ? (
                    <ThemeModeToggle
                        checked={mode === 'system' ? prefersDarkMode : mode === 'dark'}
                        onChange={(v: boolean) => {}}
                    />
                ) : null}
            </Container>
        </Header>
    );
}
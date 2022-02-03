import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, alpha } from '@mui/material/styles';
import ThemeModeToggle from '../components/header/ThemeModeToggle';
import SvgMuiLogo from '../icons/SvgLogo';
import { getCookie } from 'modules/utils/helpers';
import HeaderNavBar from 'components/header/HeaderNavBar';
import { useTranslation } from 'react-i18next';
import Link from 'modules/components/Link';
import ROUTES from 'route';

const Header = styled('header')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backdropFilter: 'blur(20px)',
    boxShadow: `inset 0px -1px 1px ${theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100]
        }`,
    backgroundColor:
        theme.palette.mode === 'dark'
            ? alpha(theme.palette.primaryDark[900], 0.72)
            : 'rgba(255,255,255,0.72)',
}));

export default function AppHeader() {
    // const changeTheme = useChangeTheme();
    const [mode, setMode] = React.useState<string | null>(null);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const { t } = useTranslation();

    React.useEffect(() => {
        const initialMode = getCookie('paletteMode') || 'system';
        setMode(initialMode);
    }, []);

    // const handleChangeThemeMode = (checked: boolean) => {
    //     const paletteMode = checked ? 'dark' : 'light';
    //     setMode(paletteMode);

    //     document.cookie = `paletteMode=${paletteMode};path=/;max-age=31536000`;
    //     changeTheme({ paletteMode });
    // };

    return (
        <Header>
            <Container sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
                <Box
                    component={Link}
                    href={ROUTES.home}
                    aria-label="Go to homepage"
                    sx={{ lineHeight: 0, mr: 2 }}
                >
                    <SvgMuiLogo width={32} />
                </Box>
                <p>test</p>
                {/* {mode !== null ? (
                    <ThemeModeToggle
                        checked={mode === 'system' ? prefersDarkMode : mode === 'dark'}
                        onChange={(v: boolean) => { }}
                    />
                ) : null} */}
            </Container>
        </Header>
    );
}
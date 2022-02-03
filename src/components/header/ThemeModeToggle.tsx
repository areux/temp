import * as React from 'react';
import { IconButton, Tooltip } from "@mui/material";
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import { useTranslation } from 'react-i18next';

interface ThemeModeToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function ThemeModeToggle(props: ThemeModeToggleProps) {
    const { t } = useTranslation();
    return (
        <Tooltip title={(props.checked ? t('turn_on_the_light') as string : t('turn_off_the_light') as string)}>
            <IconButton
                disableTouchRipple
                onClick={() => props.onChange(!props.checked)}
                sx={{
                    color: (theme) => (theme.palette.mode === 'dark' ? 'grey.100' : 'primary.main'),
                    borderRadius: 1,
                    p: '6.5px',
                    border: '1px solid',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.800' : 'transparent'),
                    borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.500' : 'grey.200'),
                    '& svg': {
                        fontSize: (theme) => theme.typography.pxToRem(18),
                    }
                }}
            >
                {props.checked ? (
                    <LightModeOutlined fontSize="small" />
                ) : (
                    <DarkModeOutlined fontSize="small" />
                )}
            </IconButton>
        </Tooltip>
    );
}
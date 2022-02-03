import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import ROUTES from 'route';

const Navigation = styled('nav')(({ theme }) => ({
    '& ul': {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: 'flex',
    },
    '& li': {
        color: theme.palette.text.secondary,
        ...theme.typography.body2,
        fontWeight: 700,
        '& > a, & > div': {
            display: 'inline-block',
            color: 'inherit',
            textDecoration: 'none',
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            '&:hover, &:focus': {
                backgroundColor:
                    theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[50],
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: 'initial',
                },
            },
        },
        '& > div': {
            cursor: 'default',
        },
    },
}));

const HeaderNavBar = () => {
    return (
        <Navigation>

        </Navigation>
    );
};

export default HeaderNavBar;
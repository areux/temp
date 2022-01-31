import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Stack, CircularProgress, InputLabel, Input, FormControl, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { green } from '@mui/material/colors';
import { connect } from 'react-redux';

async function loginUser(credentials: any) {
    return fetch('http://192.168.100.10:8084/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }: any) {
    const { t } = useTranslation();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef<number>();
    const buttonSx = {
        width: 1,
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);
    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setToken({ data: "ff" });
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSuccess(false);
        setLoading(true);
        try {
            const token = await loginUser({
                "name": username, "password": password, "rememberme": true
            });
            console.log(token);
            setToken(token);
        } catch (e: any) {
        }
        setSuccess(true);
        setLoading(false);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <Stack
                component="form"
                // onSubmit={handleSubmit}
                onSubmit={handleButtonClick}
                sx={{
                    width: '35ch',
                    display: 'flex',
                    justifyContent: 'center',
                    border: 1,
                    borderColor: '#e5e5e5',
                    position: 'relative',
                    borderRadius: 1,
                    padding: 2,
                    alignItems: 'center'
                }}
                spacing={1}
                noValidate
                autoComplete="off"
                margin="0 auto"
            >
                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                    }}
                >{t('login_or_signup')}</Typography>
                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    id="standard-adornment-amount"
                    label={t('username')}
                    type="text"
                    size="small"
                    sx={{
                        width: 1,
                    }}
                    onChange={(e: any) => setUserName(e.target.value)}
                />
                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label={t('password')}
                    type="password"
                    sx={{
                        width: 1,
                    }}
                    size="small"
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <Box
                    sx={{
                        m: 1,
                        width: 1,
                        position: 'relative'
                    }}
                >
                    <Button
                        variant="contained"
                        sx={
                            buttonSx
                        }
                        disabled={loading}
                        onClick={handleButtonClick}
                        // onClick={handleSubmit}
                        type="submit"
                    >{t('login')}
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
                <Typography variant="caption">{t('login_terms')}</Typography>

            </Stack >
        </Box >
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

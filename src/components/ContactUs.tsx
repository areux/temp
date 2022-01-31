import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
    const { t } = useTranslation();
    return (
        <>
            <Container>
                <Grid container
                    direction="row"
                    spacing={4}
                    mt={2}
                    mb={8}
                    p={0}
                    justifyContent="left"
                >
                    <Grid item>
                        <Grid container
                            direction="column"
                            spacing={2}
                        >
                            <Grid item xs={4} textAlign="left">
                                <Typography sx={{ m: 0 }}>
                                    {t('appname')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('terms')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="column"
                            spacing={2}
                        >
                            <Grid item xs={4} textAlign="left">
                                <Typography sx={{ m: 0 }}>
                                    {t('cus-h1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line2')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line3')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="column"
                            spacing={2}
                        >
                            <Grid item xs={4} textAlign="left">
                                <Typography sx={{ m: 0 }}>
                                    {t('cus-h1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line2')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line3')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="column"
                            spacing={2}
                        >
                            <Grid item xs={4} textAlign="left">
                                <Typography sx={{ m: 0 }}>
                                    {t('cus-h1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line2')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line3')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="column"
                            spacing={2}
                        >
                            <Grid item xs={4} textAlign="left">
                                <Typography sx={{ m: 0 }}>
                                    {t('cus-h1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line1')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line2')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="left">
                                <Typography variant="caption">
                                    {t('cus-line3')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

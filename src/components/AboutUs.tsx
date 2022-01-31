import React from "react";
import { Grid, Typography } from '@mui/material';

export default () => {
    return (
        <>
            <Grid container direction="row" justifyContent="center" spacing={3} mt={10}>
                <Grid item>
                    <Typography align="right" >
                        <p>از کوزه گری کوزه خریدم باری</p>
                        <p>شاهی بودم که جام زرینم بود</p>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="left" >
                        <p>آن کوزه سخن گفت ز هر اسراری</p>
                        <p>اکنون شده‌ام کوزه هر خماری</p>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
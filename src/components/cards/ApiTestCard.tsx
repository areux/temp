import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Collapse, Divider, FormControlLabel, FormGroup, IconButton, List, ListItem, ListItemIcon, ListItemText, Switch, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useQuery } from 'react-query';

const C1 = (props: any) => {
    const { isLoading, error, data, isFetching } = useQuery("x" + props.n, () =>
        fetch(
            "https://jsonplaceholder.typicode.com/posts/" + props.n
        ).then((res) => res.json())
    );

    let title = "";
    let desc = "";


    if (isLoading) {
        title = "Loading...";
    } else if (error) {
        title = "Error";
    } else {
        title = data.title;
        desc = data.body;
    }

    return (
        <CardActionArea>
            {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
        </CardActionArea>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
}));

export default () => {
    const items = Array(24).fill(0).map((_, i) => (
        <Grid item xs={3} sm={3} md={4} key={i + 1}>
            <Item>
                <C1 n={i + 1} />
            </Item>
        </Grid>
    ));
    return (
        <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={3}
            justifyContent="center"
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {items}
        </Grid>
    );
}
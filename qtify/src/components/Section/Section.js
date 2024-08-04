import React from "react";
import Grid from '@mui/material/Grid';
import Card from '../Card/Card';
import { Typography } from '@mui/material';
import styles from "./Section.module.css";

export default function Section({ title, data }) {
    return (
        <div>

            <Grid container spacing={4} sx={{ padding: 3 }}>
                <Grid item xs={12}>
                    <h1 style={{ color: 'white', textAlign: 'left', margin: '0px' }}>
                        {title}
                    </h1>
                </Grid>
                {data && data.map((group, index) => (
                    <Grid item xs={12 / 7} key={index}>
                        <Card image={group.image} follows={group.follows} />
                        <Typography sx={{ color: 'white', textAlign: 'left' }}> {group.title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
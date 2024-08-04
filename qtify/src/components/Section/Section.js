import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '../Card/Card';
import { Typography } from '@mui/material';
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, data }) {
    const [collapsed, setCollapse] = useState(true)
    return (
        <div>

            <Grid container spacing={4} sx={{ padding: 3 }}>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'white', textAlign: 'left', margin: '0px' }}>
                        {title} Albums
                    </span>
                    <button style={{ backgroundColor: 'transparent', border: 'none', color: 'var(--color-primary)' }} onClick={() => setCollapse(!collapsed)}>
                        {collapsed ? 'Show All' : 'Collapse'}
                    </button>
                </Grid>
                {collapsed ?
                    <Carousel data={data} />
                    :
                    data && data.map((group, index) => (
                        <Grid item xs={12 / 7} key={index}>
                            <Card image={group.image} follows={group.follows} />
                            <Typography sx={{ color: 'white', textAlign: 'left' }}> {group.title}</Typography>
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}
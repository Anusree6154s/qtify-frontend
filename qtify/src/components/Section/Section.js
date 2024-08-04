import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import { Typography } from "@mui/material";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, data, songs = false, genres }) {
    const [collapsed, setCollapse] = useState(true);

    return (
        <div>
            <Grid container spacing={4} sx={{ padding: 3 }}>
                <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <span style={{ color: "white", fontWeight: 'bold', fontSize: '20px' }}>
                        {songs ? title : `${title} Albums`}
                    </span>
                    {!songs && (
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "var(--color-primary)",
                                fontWeight: 'bold'
                            }}
                            onClick={() => setCollapse(!collapsed)}
                        >
                            {collapsed ? "Show All" : "Collapse"}
                        </button>
                    )}
                </Grid>
                {collapsed ? (
                    <Carousel data={data} songs={songs} genres={genres} />
                ) : (
                    data &&
                    data.map((group, index) => (
                        <Grid item xs={12 / 7} key={index}>
                            <Card image={group.image} follows={group.follows} />
                            <Typography sx={{ color: "white", textAlign: "left", fontSize: '14px' }}>
                                {group.title}
                            </Typography>
                        </Grid>
                    ))
                )}
            </Grid>
        </div>
    );
}

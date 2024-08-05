import React, { useState, } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import { Typography, Stack } from "@mui/material";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';







export default React.memo(function Section({ title, data: { data, type }, songs = false, genres }) {
    const [collapsed, setCollapse] = useState(true);





    return (
        <div>
            {type === 'grid' ?
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
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
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
                            <Grid item xs={12 / 7} key={index}  style={{ cursor: 'pointer' }}>
                                <Card image={group.image} follows={group.follows} />
                                <Typography sx={{ color: "white", textAlign: "left", fontSize: '14px' }}>
                                    {group.title}
                                </Typography>
                            </Grid>
                        ))
                    )}
                </Grid>
                :
                <div>
                    <h2 style={{ color: 'white' }}>{title}</h2>
                    <Stack style={{ margin: '0% 10%' }} spacing={1}>
                        {data.map((faq, index) => (
                            <Accordion key={index} sx={{ backgroundColor: 'var(--color-black)', color: 'white', border: '1px solid white', borderRadius: '5px' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'var(--color-primary)' }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    {faq.question}
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: 'white', color: 'var(--color-black)', textAlign: 'left' }}>
                                    {faq.answer}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack>

                    <br />
                </div>
            }


        </div >
    );
}
)
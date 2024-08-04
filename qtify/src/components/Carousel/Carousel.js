import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Grid from '@mui/material/Grid';
import Card from '../Card/Card';
import { Typography } from '@mui/material';
import './Carousel.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Carousel({ data, songs = false, genres }) {
    const [value, setValue] = useState('all');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderSwiper = (filteredData) => (
        <Swiper
            slidesPerView={1}
            breakpoints={{
                280: { slidesPerView: 2, spaceBetween: 30 },
                400: { slidesPerView: 3, spaceBetween: 30 },
                668: { slidesPerView: 5, spaceBetween: 30 },
                1024: { slidesPerView: 7, spaceBetween: 30 },
            }}
            spaceBetween={10}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {filteredData.map((group, index) => (
                <SwiperSlide key={index}>
                    <Card image={group.image} follows={group.follows} likes={group.likes} />
                    <Typography sx={{ color: 'white', textAlign: 'left' }}>{group.title}</Typography>
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return (
        <Grid item xs={12}>
            {songs ? (
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{
                                style: { backgroundColor: 'var(--color-primary)' }
                            }}>
                                <Tab label='All' value='all' style={{ color: 'white' }} />
                                {genres.map((genre, index) => (
                                    <Tab key={index} label={genre.label} value={genre.key} style={{ color: 'white' }} />
                                ))}
                            </TabList>
                        </Box>
                        <TabPanel value='all'>
                            {renderSwiper(data)}
                        </TabPanel>
                        {genres.map(genre => (
                            <TabPanel key={genre.key} value={genre.key}>
                                {renderSwiper(data.filter(item => item.genre.key === genre.key))}
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            ) : (
                renderSwiper(data)
            )}
        </Grid>
    );
}

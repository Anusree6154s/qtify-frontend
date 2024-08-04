// import React from "react";
// import Grid from '@mui/material/Grid';
// import Card from '../Card/Card';
// import { Typography } from '@mui/material';
// import styles from "./Section.module.css";

// export default function Carousel({ title, data }) {
//     return (
//         <div>

//             <Grid container spacing={4} sx={{ padding: 3 }}>
//                 {data && data.map((group, index) => (
//                     <Grid item xs={12} key={index}>
//                         <Card image={group.image} follows={group.follows} />
//                         <Typography sx={{ color: 'white', textAlign: 'left' }}> {group.title}</Typography>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     )
// }

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Navigation } from 'swiper/modules';

import Grid from '@mui/material/Grid';
import Card from '../Card/Card';
import { Typography } from '@mui/material';

export default function Carousel({ data }) {
    return (
        <Grid item xs={12}>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    280: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    668: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    },
                }}
                spaceBetween={10}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {/* <Grid container >
                    <Grid item xs={12}> */}
                {data && data.map((group, index) => (
                    <SwiperSlide>
                        {/* <Grid item xs={12} key={index}> */}
                        <Card image={group.image} follows={group.follows} />
                        <Typography sx={{ color: 'white', textAlign: 'left' }}> {group.title}</Typography>
                        {/* </Grid> */}
                    </SwiperSlide>
                ))}
                {/* </Grid>
                </Grid> */}
            </Swiper>
        </Grid>
    );
}

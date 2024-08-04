import * as React from 'react';
import Chip from '@mui/material/Chip';
import styles from "./Card.module.css";

export default function Card({image, follows, likes}) {
    return (
        <div className={styles.container}>
            <div className={styles['img-container']}>
                <img src={image} alt="bird" className={styles.img} />
            </div>

            <div className={styles['chip-container']}>
                <Chip label={follows?`${follows} Follows`: likes && `${likes} likes`} className={styles.chip} />
            </div>
        </div>
    )
}
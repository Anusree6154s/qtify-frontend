import React from "react";
import styles from "./Button.module.css";

export default function CustomButton({ children, onClick }) {
    return (
        <button className={styles.button} onClick={onClick} style={{ cursor: 'pointer' }}>
            {children}
        </button>
    )
}
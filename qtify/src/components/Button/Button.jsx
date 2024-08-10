import React from "react";
import styles from "./Button.module.css";

export default function CustomButton({ children, onClick }) {
    return <button onClick={onClick} className={styles.button}> {children} </button>

}

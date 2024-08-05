import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Button/Button"; // Correct import for your custom button
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Box, Stack, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Navbar({ searchData }) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav className={styles.navbar}>
                <Link to="/">
                    <Logo />
                </Link>
                <Search
                    placeholder="Search a song of your choice"
                    searchData={searchData}
                />
                <CustomButton onClick={() => setOpen(true)}>Give Feedback</CustomButton>
            </nav>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <button
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => setOpen(false)}
                    >
                        x
                    </button>
                    <Stack style={{ textAlign: 'center' }} spacing={2} alignItems='center'>
                        <h3>Feedback</h3>
                        <TextField
                            id="name"
                            label="Full Name"
                            variant="outlined"
                            size='small'
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-primary)',
                                },
                                '& .MuiInputLabel-root': {
                                    fontFamily: 'var(--font-family)',
                                },
                                '& .MuiInputBase-input:hover': {
                                    borderColor: 'var(--color-primary)',
                                },
                            }}
                        />
                        <TextField
                            id="email"
                            label="Email ID"
                            variant="outlined"
                            size='small'
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-primary)',
                                },
                                '& .MuiInputLabel-root': {
                                    fontFamily: 'var(--font-family)',
                                },
                                '& .MuiInputBase-input:hover': {
                                    borderColor: 'var(--color-primary)',
                                },
                            }}
                        />
                        <TextField
                            id="subject"
                            label="Subject"
                            variant="outlined"
                            size='small'
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-primary)',
                                },
                                '& .MuiInputLabel-root': {
                                    fontFamily: 'var(--font-family)',
                                },
                                '& .MuiInputBase-input:hover': {
                                    borderColor: 'var(--color-primary)',
                                },
                            }}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            variant="outlined"
                            size='small'
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    height: '100px',
                                },
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-primary)',
                                },
                                '& .MuiInputLabel-root': {
                                    fontFamily: 'var(--font-family)',
                                },
                                '& .MuiInputBase-input:hover': {
                                    borderColor: 'var(--color-primary)',
                                },
                            }}
                            multiline
                        />
                        <Button
                            variant="contained"
                            sx={{
                                width: '50%',
                                backgroundColor: 'var(--color-primary)',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'var(--color-primary)',
                                },
                            }}
                        >
                            Submit Feedback
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
}

export default Navbar;

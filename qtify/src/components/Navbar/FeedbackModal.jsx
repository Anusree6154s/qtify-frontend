import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Navbar.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 400, xs: 200 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "60%",
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey", // default
    },
    "&:hover fieldset": {
      borderColor: "var(--color-primary)", // hover
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--color-primary) !important", // focus (click)
      borderWidth: "1px",
    },
  },

  "& .MuiInputLabel-root": {
    color: "grey", // default label
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--color-primary) !important", // focus (label color)
    borderWidth: "1px",
  },
  "& .MuiInputLabel-root:hover": {
    color: "var(--color-primary)", // hover label color
    borderWidth: "1px",
  },
};

export default function FeedbackModal({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) toast.success("Email Sent!");
    else toast.error("Failed to send email");
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box sx={style}>
          <Stack
            component="form"
            alignItems="center"
            justifyContent="space-between"
            className={styles.stack}
            onSubmit={handleSubmit}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Poppins",
                }}
              >
                Feedback
              </Typography>
              <Close
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", right: 0, cursor: "pointer" }}
              />
            </Box>
            <TextField
              id="name"
              label="Full Name"
              variant="outlined"
              size="small"
              sx={textFieldStyle}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              id="email"
              label="Email ID"
              variant="outlined"
              size="small"
              sx={textFieldStyle}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              size="small"
              sx={textFieldStyle}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              size="small"
              multiline
              sx={{
                ...textFieldStyle,
                "& .MuiInputBase-input": {
                  minHeight: "100px",
                },
              }}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "192",
                height: "53",
                borderRadius: "10px",
                px: "10px",
                py: "8px",
                boxShadow: "none",
                fontFamily: "Poppins",
                fontSize: "14px",
                textTransform: "none",
                fontWeight: "600 !important",
              }}
            >
              Submit Feedback
            </Button>
          </Stack>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
}

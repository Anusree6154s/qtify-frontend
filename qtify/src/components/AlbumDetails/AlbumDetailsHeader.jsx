import { ArrowCircleLeftOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./AlbumDetails.module.css";

export default function AlbumDetailsHeader({ album, totalDuration }) {
  const navigate = useNavigate();

  return (
    <Box
      className={styles.header}
      sx={(theme) => ({
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        [theme.breakpoints.up(500)]: {
          flexDirection: "row",
        },
        [theme.breakpoints.down(499)]: {
          height: "fit-content ",
        },
      })}
    >
      <ArrowCircleLeftOutlined onClick={() => navigate("/")} />
      <Box
        component="img"
        src={album.image}
        alt={album.title}
        sx={(theme) => ({
          objectFit: "cover",
          objectPosition: "top",
          [theme.breakpoints.down(500)]: {
            width: "100% !important",
            aspectRatio: "1/0.5",
          },
        })}
      />
      <Stack spacing={1}>
        <Typography component="h3">{album.title}</Typography>
        <Typography component="p">{album.description}</Typography>
        <Typography component="p">
          {`${album.songs.length} songs • ${totalDuration()} • ${
            album.follows
          } Follows`}
        </Typography>
      </Stack>
    </Box>
  );
}

import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./AlbumDetails.module.css";

export default function SongsList({ currentSongs, setSelectedSong }) {
  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={(theme) => ({
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: "500 !important",
                [theme.breakpoints.down(384)]: { display: "none" },
              })}
            >
              Title
            </TableCell>
            <TableCell
              sx={(theme) => ({
                fontFamily: "Poppins",
                fontSize: "14px !important",
                fontWeight: "500 !important",
                [theme.breakpoints.up(384)]: { display: "none" },
              })}
            >
              Song
            </TableCell>
            <TableCell
              sx={(theme) => ({
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: "500 !important",
                [theme.breakpoints.down(384)]: { display: "none" },
              })}
            >
              Artist
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px !important",
                fontWeight: "500 !important",
                textAlign: "right !important",
              }}
            >
              Duration
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentSongs.map((song, index) => (
            <TableRow key={index} onClick={() => setSelectedSong(song)}>
              <TableCell
                sx={(theme) => ({
                  [theme.breakpoints.down(384)]: {
                    verticalAlign: "top",
                  },
                })}
              >
                <img src={song.image} alt={song.title} />
                <Stack spacing={1}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                    }}
                  >
                    {song.title}
                  </Typography>
                  <Typography
                    component="span"
                    sx={(theme) => ({
                      fontFamily: "Poppins",
                      fontSize: "11px",
                      color: "gray",
                      [theme.breakpoints.up(384)]: {
                        display: "none",
                      },
                    })}
                  >
                    <Typography
                      component="span"
                      sx={{
                        mr: 1,
                        fontFamily: "Poppins",
                        fontSize: "11px",
                        color: "gray",
                      }}
                    >
                      Artist:
                    </Typography>
                    {song.artists.join(", ")}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell
                sx={(theme) => ({
                   fontFamily: "Poppins", 
                  [theme.breakpoints.down(384)]: {
                    display: "none",
                    verticalAlign: "top",
                  },
                })}
              >
                {song.artists.join(", ")}
              </TableCell>
              <TableCell
                sx={(theme) => ({
                  fontFamily: "Poppins",
                  [theme.breakpoints.down(384)]: {
                    verticalAlign: "top",
                  },
                })}
              >
                {Math.ceil(song.durationInMs / 60000)} min
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

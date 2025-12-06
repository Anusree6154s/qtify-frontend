import { Box, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MusicContext } from "../../MusicContext";
import MusicBar from "../MusicBar/MusicBar";
import styles from "./AlbumDetails.module.css";
import AlbumDetailsHeader from "./AlbumDetailsHeader";
import SongsList from "./SongsList";

function AlbumDetails({ data }) {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [page, setPage] = useState(1);
  const { setSelectedSong } = React.useContext(MusicContext);

  useEffect(() => {
    if (id && data) {
      const allData = [...data.new, ...data.top];
      const foundAlbum = allData.find((item) => item.id === id);
      setAlbum(foundAlbum);
    }
  }, [id, data]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const songsPerPage = 13;
  const startIndex = (page - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const currentSongs = album ? album.songs.slice(startIndex, endIndex) : [];

  if (!album) {
    return <div className={styles.loading}>Loading...</div>;
  }

  function totalDuration() {
    let durationInMillis = album.songs.reduce(
      (acc, curr) => curr.durationInMs + acc,
      0
    );
    const minutes = Math.floor(durationInMillis / 60000); // 1 minute = 60,000 milliseconds
    return `${minutes} min`;
  }

  return (
    <Box className={styles.albumDetails}>
      <Stack className={styles.stack} spacing={2}>
        <AlbumDetailsHeader album={album} totalDuration={totalDuration} />

        <Pagination
          count={Math.ceil(album.songs.length / songsPerPage)}
          page={page}
          onChange={handleChange}
          size="small"
          className={styles.pagination}
          sx={(theme) => ({
            [`& ul`]: {
              [theme.breakpoints.down(500)]: {
                justifyContent: "center !important",
              },
            },
          })}
        />

        <SongsList
          currentSongs={currentSongs}
          setSelectedSong={setSelectedSong}
        />
      </Stack>

      <MusicBar src="../../assets/music.mp3" />
    </Box>
  );
}

export default AlbumDetails;

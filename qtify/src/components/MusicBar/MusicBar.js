import React from "react";

import { Box, Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { MusicContext } from "../../MusicContext";
import music from "../../assets/music.mp3";
import styles from "./MusicBar.module.css";

function MusicBar() {
  const { selectedSong, setSelectedSong } = React.useContext(MusicContext);
  const [play, setPlay] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [isInitialRender, setIsInitialRender] = React.useState(true);

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    let timer;

    if (play) {
      audioRef.current.play();
      timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (Math.floor(oldProgress) === 100) {
            setPlay(false);
            return 100;
          }
          return oldProgress + 0.1;
        });
      }, [100]);
    } else {
      audioRef.current.pause();
    }

    return () => {
      clearInterval(timer);
    };
  }, [play]);

  React.useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return; // Skip playback on initial render
    }
    if (selectedSong) {
      setProgress(0);
      setTimeout(() => {
        setPlay(true);
      }, [1000]);
    }
  }, [selectedSong]);

  const handlePlay = () => {
    if (progress === 100) {
      setProgress(0);
      setTimeout(() => {
        setPlay(!play);
      }, [1000]);
    } else {
      setPlay(!play);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} preload="auto" type="audio/mpeg" />
      {selectedSong && (
        <div className={styles.bar}>
          <div className={styles.info}>
            <img src={selectedSong.image} alt="bird" />
            <Stack>
              <span>{selectedSong.title}</span>
              <span>{selectedSong.artists[0]}</span>
            </Stack>
          </div>

          <div className={styles.playArea}>
            <button onClick={handlePlay}>
              {play ? <PauseCircleIcon /> : <PlayCircleIcon />}
            </button>

            <Box>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </div>
        </div>
      )}
    </>
  );
}

export default MusicBar;

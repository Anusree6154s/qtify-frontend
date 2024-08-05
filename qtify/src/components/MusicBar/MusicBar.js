import React from "react";

import { Box, Stack } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { MusicContext } from '../../MusicContext';
import music from '../../assets/music.mp3';


function MusicBar() {

    const { selectedSong, setSelectedSong } = React.useContext(MusicContext)
    const [play, setPlay] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [isInitialRender, setIsInitialRender] = React.useState(true);

    const audioRef = React.useRef(null);


    React.useEffect(() => {
        let timer

        if (play) {
            audioRef.current.play();
            timer = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress === 100) {
                        setPlay(false)
                        return 100
                    }
                    return oldProgress + 1
                })
            }, [100])
        } else {
            audioRef.current.pause();
        }


        return () => {
            clearInterval(timer);
        };
    }, [play])

    React.useEffect(() => {
        if (isInitialRender) {
            setIsInitialRender(false);
            return; // Skip playback on initial render
        }
        if (selectedSong) {
            setProgress(0)
            setTimeout(() => {
                setPlay(true)
            }, [1000])
        }
    }, [selectedSong])

    const handlePlay = () => {
        if (progress === 100) {
            setProgress(0)
            setTimeout(() => {
                setPlay(!play)
            }, [1000])
        } else {
            setPlay(!play)
        }

    }


    return (
        <>
            <audio ref={audioRef} src={music} preload="auto" type="audio/mpeg" />
            {selectedSong &&
                <div style={{ height: '15vh', borderTop: '2px grey solid', position: 'sticky', bottom: '0px', backgroundColor: 'var(--color-black)', zIndex: 3000, display: 'flex' }}>
                    <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '2%', gap: 10 }}>
                        <img src={selectedSong.image} alt="bird" style={{ width: '10vh', height: '10vh', object: 'fit' }} />
                        <Stack style={{ color: 'white', textAlign: 'left' }}>
                            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{selectedSong.title}</span>
                            <span style={{ fontSize: '8px' }}>{selectedSong.artists[0]}</span>
                        </Stack>
                    </div>

                    <div style={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                        <button onClick={handlePlay} style={{ backgroundColor: 'var(--color-balck)', border: 'none', cursor: 'pointer' }}>
                            {play ? <PauseCircleIcon sx={{ color: 'white' }} /> : <PlayCircleIcon sx={{ color: 'white' }} />}
                        </button>

                        <Box sx={{ width: '60%' }}>
                            <LinearProgress variant="determinate" value={progress} sx={{
                                backgroundColor: 'white',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'var(--color-primary)',
                                },
                            }} />
                        </Box>
                    </div>

                </div>}
        </>
    );
}

export default MusicBar;

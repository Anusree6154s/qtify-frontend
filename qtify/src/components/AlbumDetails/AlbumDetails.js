import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MusicBar from '../MusicBar/MusicBar';
import axios from 'axios';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useNavigate } from 'react-router-dom';
import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { MusicContext } from "../../MusicContext";

function AlbumDetails() {
  
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();
    const { selectedSong, setSelectedSong } = React.useContext(MusicContext)

    const fetchAlbumData = async () => {
        try {
            const newData = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
            const topData = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            const allData = [...newData.data, ...topData.data];
            const foundAlbum = allData.find(item => item.id === id);
            setAlbum(foundAlbum);
        } catch (error) {
            console.error("Error fetching album data:", error);
        }
    };

    useEffect(() => {
        fetchAlbumData();
    }, [id]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const songsPerPage = 13;
    const startIndex = (page - 1) * songsPerPage;
    const endIndex = startIndex + songsPerPage;
    const currentSongs = album ? album.songs.slice(startIndex, endIndex) : [];

    if (!album) {
        return <div style={{ color: 'white' }}>Loading...</div>;
    }

    function totalDuration() {
        let durationInMillis = album.songs.reduce((acc, curr) => curr.durationInMs + acc, 0);
        const minutes = Math.floor(durationInMillis / 60000); // 1 minute = 60,000 milliseconds
        return `${minutes} min`;
    }

    return (
        <div style={{ color: 'white', textAlign: 'left' }}>
           
            <Stack style={{ padding: '5%' }} spacing={2}>
                <ArrowCircleLeftOutlinedIcon onClick={() => navigate('/')} style={{ cursor: 'pointer', height: '4%', width: '4%' }} />

                <div style={{ display: 'flex', gap: 30, height: '30vh' }}>
                    <img src={album.image} alt={album.title} style={{ width: '30vh', height: '100%', flex: 0.30, borderRadius: '20px' }} />
                    <div style={{ flex: 1 }}>
                        <h3>{album.title}</h3>
                        <div style={{ color: 'grey', fontSize: '12px' }}>
                            <p>{album.description}</p>
                            <p>{album.songs.length} songs • {totalDuration()} • {album.follows} Follows</p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <Pagination
                        count={Math.ceil(album.songs.length / songsPerPage)}
                        page={page}
                        onChange={handleChange}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: 'white',
                            },
                            '& .Mui-selected': {
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                            },
                            '& .MuiPaginationItem-root.Mui-selected:hover': {
                                backgroundColor: 'green',
                                color: 'white',
                            },
                            display: 'inline-block',
                        }}
                        size="small"
                    />
                </div>

                <TableContainer component={Paper} style={{ backgroundColor: 'var(--color-black)' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: 'white', border: 'none', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>Title</TableCell>
                                <TableCell style={{ color: 'white', border: 'none', fontSize: '16px', fontWeight: 'bold' }}>Artist</TableCell>
                                <TableCell style={{ color: 'white', border: 'none', textAlign: 'right', fontSize: '16px', fontWeight: 'bold' }}>Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentSongs.map((song, index) => (
                                <TableRow key={index} onClick={() => setSelectedSong(song)} style={{ cursor: 'pointer' }}>
                                    <TableCell style={{ color: 'white', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '12px', borderBottom: '1px solid grey' }}>
                                        <img src={song.image} alt={song.title} style={{ width: '40px', height: '40px' }} />
                                        {song.title}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', fontSize: '12px', borderBottom: '1px solid grey' }}>{song.artists.join(', ')}</TableCell>
                                    <TableCell style={{ color: 'white', textAlign: 'right', fontSize: '12px', borderBottom: '1px solid grey' }}>{Math.ceil(song.durationInMs / 60000)} min</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Stack>
            <MusicBar src='../../assets/music.mp3' />
        </div>
    );
}

export default AlbumDetails;

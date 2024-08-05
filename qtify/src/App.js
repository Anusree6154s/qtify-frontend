import './App.css';
import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Section from './components/Section/Section';
import { Stack, Divider } from '@mui/material';
import { MusicContext } from './MusicContext';
import MusicBar from './components/MusicBar/MusicBar';

import { Routes, Route } from 'react-router-dom';
import AlbumDetails from './components/AlbumDetails/AlbumDetails';


export const fetchData = async (type) => {
  try {
    let res = await axios.get('https://qtify-backend-labs.crio.do/' + type)

    return res.data
  } catch (e) {
    console.log(e)
  }
}


function App() {
  const [newData, setNewData] = useState([])
  const [topData, setTopData] = useState([])
  const [songData, setSongData] = useState([])
  const [genreData, setGenreData] = useState([])
  const [faqData, setFaqData] = useState([])


  const [selectedSong, setSelectedSong] = useState(null);




  useEffect(() => {
    const getData = async () => {
      let data = await fetchData('albums/new')
      await setNewData(data)
      data = await fetchData('albums/top')
      await setTopData(data)
      data = await fetchData('songs')
      await setSongData(data)
      data = await fetchData('genres')
      await setGenreData(data.data)
      data = await fetchData('faq')
      await setFaqData(data.data)


    }
    getData()

  }, [])




  return (
    <MusicContext.Provider value={{ selectedSong, setSelectedSong }}>
      <div className="App">
        <Navbar searchData={newData.concat(topData)} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stack divider={<Divider flexItem sx={{ backgroundColor: 'var(--color-primary)' }} />}>
                <Section title='Top' data={{ data: topData, type: 'grid' }} />
                <Section title='New' data={{ data: newData, type: 'grid' }} />
                <Section title='Songs' data={{ data: songData, type: 'grid' }} songs={true} genres={genreData} />
                <Section title='FAQs' data={{ data: faqData, type: 'faq' }} />
              </Stack>
              <MusicBar />
            </>
          } />
          <Route path="/albumdetails/:id" element={<AlbumDetails />} />
        </Routes>
      </div>
    </MusicContext.Provider>
  );
}

export default App;

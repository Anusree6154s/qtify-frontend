import './App.css';
import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Section from './components/Section/Section';
import { Stack, Divider } from '@mui/material';


function App() {
  const [newData, setNewData] = useState([])
  const [topData, setTopData] = useState([])
  const [songData, setSongData] = useState([])
  const [genreData, setGenreData] = useState([])

  const fetchData = async (type) => {
    try {
      let res = await axios.get('https://qtify-backend-labs.crio.do/' + type)

      return res.data
    } catch (e) {
      console.log(e)
    }
  }

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


    }
    getData()

  }, [])


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stack divider={<Divider flexItem sx={{ backgroundColor: 'var(--color-primary)' }} />}>
        <Section title='Top' data={topData} />
        <Section title='New' data={newData} />
        <Section title='Songs' data={songData} songs={true} genres={genreData} />
      </Stack>

    </div>
  );
}

export default App;

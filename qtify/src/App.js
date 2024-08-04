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

  const fetchData = async (type) => {
    try {
      let res = await axios.get('https://qtify-backend-labs.crio.do/albums/' + type)

      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const getData = async () => {
      let data = await fetchData('new')
      await setNewData(data)
      data = await fetchData('top')
      await setTopData(data)
    }
    getData()

  }, [])

  // console.log(topData, newData)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stack divider={<Divider flexItem sx={{ backgroundColor: 'white' }} />}>
        <Section title='Top' data={topData} />
        <Section title='New' data={newData} />
      </Stack>

    </div>
  );
}

export default App;

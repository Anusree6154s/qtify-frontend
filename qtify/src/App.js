import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { MusicContext } from "./MusicContext";

import { Routes, Route } from "react-router-dom";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";
import Home from "./components/Home/Home";

export const fetchData = async (type) => {
  try {
    let res = await axios.get("https://qtify-backend-labs.crio.do/" + type);

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

function App() {
  const [newData, setNewData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    let arr = [
      { data: "albums/new", setData: setNewData },
      { data: "albums/top", setData: setTopData },
    ];
    arr.forEach(async (item) => {
      let data = await fetchData(item.data);
      await item.setData(data);
    });
  }, []);

  return (
    <MusicContext.Provider
      value={{ selectedSong, setSelectedSong }}
    >
      <div className="App">
        <Navbar searchData={newData.concat(topData)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albumdetails/:id" element={<AlbumDetails />} />
        </Routes>
      </div>
    </MusicContext.Provider>
  );
}

export default App;

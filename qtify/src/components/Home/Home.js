import styles from "./Home.module.css";

import Hero from "../Hero/Hero";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import { Stack, Divider } from "@mui/material";
import MusicBar from "../MusicBar/MusicBar";


export const fetchData = async (type) => {
  try {
    let res = await axios.get("https://qtify-backend-labs.crio.do/" + type);

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

function Home() {
  const [newData, setNewData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let arr = [
      { data: "albums/new", setData: setNewData },
      { data: "albums/top", setData: setTopData },
      { data: "songs", setData: setSongData },
      { data: "genres", setData: setGenreData },
      { data: "faq", setData: setFaqData },
    ];
    arr.forEach(async (item) => {
      let data = await fetchData(item.data);
      await item.setData(data);
    });

    setTimeout(() => setVisible(true), 1000);
  }, []);

  return (
    <div className={styles.home}>
      <Hero />
      {visible && (
        <Stack divider={<Divider flexItem />}>
          <Section title="Top" data={{ data: topData, type: "grid" }} />
          <Section title="New" data={{ data: newData, type: "grid" }} />
          <Section
            title="Songs"
            data={{ data: songData, type: "grid" }}
            songs={true}
            genres={genreData.data}
          />
          <Section title="FAQs" data={{ data: faqData.data, type: "faq" }} />
        </Stack>
      )}
      <MusicBar />
    </div>
  );
}

export default Home;

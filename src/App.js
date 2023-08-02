import "./App.css";
import React, { useState, useEffect } from "react";
import { sahteVeri } from "./sahteVeri/sahteVeri";

function App() {
  const [dateBaslik, setDateBaslik] = useState();
  const [paragraf, setParagraf] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [count, setCount] = useState(0);
  const [buton, setButon] = useState("");

  const butonCalistir = () => {
    setCount(count + 1);
    setButon("Tomorrow");
  };
  useEffect(() => {
    if (count < sahteVeri.length) {
      const data = sahteVeri[count];
      setDateBaslik("Date: ");
      setTitle(data.title);
      setDate(data.date);
      setExplanation(data.explanation);
      setUrl(data.url);
    }
  }, [count]);

  const backgroundUrl = url
    ? url
    : "https://wallpaperset.com/w/full/9/5/c/118741.jpg";
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <h1>Astronomy Picture of the Day</h1>
      <p>{paragraf}</p>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>
          <b>{dateBaslik}</b> {date}
        </p>
      </div>
      <div>
        <p>
          <b>Explanation: </b> {explanation}
        </p>
      </div>
      <center>
        <b> M82: Galaxy with a Supergalactic Wind </b>
        <a href="https://www.nasa.gov/">NASA</a>,
        <a href="https://www.esa.int/">ESA</a>,
        <a href="https://www.nasa.gov/mission_pages/hubble/story/index.html">
          Hubble
        </a>
        ;
      </center>
      <button onClick={butonCalistir}>{buton}</button>
    </div>
  );
}

export default App;

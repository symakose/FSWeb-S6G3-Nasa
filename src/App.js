import "./App.css";
import React, { useState, useEffect } from "react";
import { sahteVeri } from "./sahteVeri/sahteVeri";

function App() {
  const [dateBaslik, setDateBaslik] = useState();
  const [head, setHead] = useState();
  const [paragraf, setParagraf] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [expBaslik, setExpBaslik] = useState();
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
          <b>explanation: </b> {explanation}
        </p>
      </div>
      <button onClick={butonCalistir}>{buton}</button>
    </div>
  );
}

export default App;

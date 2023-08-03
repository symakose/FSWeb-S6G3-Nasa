import "./App.css";
import React, { useState, useEffect } from "react";
import { sahteVeri } from "./sahteVeri/sahteVeri";
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
`;
const AppHead = styled.div`
  background-color: #b0c4de;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;
const AppButton = styled.button`
  padding: 10px 5px;
  border: 2px solid rgb(70, 30, 180);
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  background-color: #00bfff;
  color: white;
`;

function App() {
  const [dateBaslik, setDateBaslik] = useState();
  const [paragraf, setParagraf] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [count, setCount] = useState(0);
  const [buton, setButon] = useState("");
  const [copy, setCopy] = useState();

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
      setCopy(data.copyright);
    }
  }, [count]);

  const backgroundUrl = url
    ? url
    : "https://wallpaperset.com/w/full/9/5/c/118741.jpg";

  return (
    <AppDiv>
      <AppHead>
        <div
          className="App"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
          <h1>Astronomy Picture of the Previous Day</h1>

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
            ;<p>Image Credit & Copyright: {copy}</p>
          </center>
          <AppButton>
            <button onClick={butonCalistir}>{buton}</button>
          </AppButton>
        </div>
      </AppHead>
    </AppDiv>
  );
}

export default App;

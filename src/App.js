import React, { useState, useEffect } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Momo please",
  "Don't do this to me",
  "I'm gonna cry",
  "You're breaking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  useEffect(() => {
    const audioElement = document.getElementById("valentineAudio");

    if (audioPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [audioPlaying]);

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function handlePlayButtonClick() {
    const audioElement = document.getElementById("valentineAudio");
  
    if (audioElement.paused) {
      audioElement.play().catch(error => {
        // Autoplay was prevented, handle it here
        console.error("Autoplay was prevented:", error);
      });
    } else {
      audioElement.pause();
    }
  
    setAudioPlaying(!audioPlaying);
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="kissing-bears"
          />
          <div className="text">Yay!!!! I Love you Momo!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            className="heart-bears"
          />

          <div className="question">Will you be my Valentine?</div>
          <div className="buttons-container">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <button className="playButton" onClick={handlePlayButtonClick}>
        ▶️
      </button>
      {audioPlaying && (
        <audio id="valentineAudio" loop controls>
          <source src="https://raw.githubusercontent.com/Preksha0420/Valentine/master/music.mp3" type="audio/mp3" />
        </audio>
      )}
    </div>
  );
}

export default App;

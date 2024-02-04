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
  const [isPlaying, setIsPlaying] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
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
          <audio autoPlay={isPlaying} loop>
            <source src="your_background_music.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
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
            <button onClick={handlePlayPause} className="playPauseButton">
              {isPlaying ? "Pause Music" : "Play Music"}
            </button>
          </div>
          {isPlaying && (
            <audio autoPlay loop>
              <source src="your_background_music.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          )}
        </>
      )}
    </div>
  );
}

export default App;

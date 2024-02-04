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

const yesPhrases = [
  "Yay!!!! I Love you Momo!",
  "You're my Valentine!",
  "This is the best day ever!",
  // Add more phrases as needed
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [yesPhraseIndex, setYesPhraseIndex] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function handleYesClick() {
    setYesPressed(true);
    setIsPlaying(true);

    // Cycle through yesPhrases
    setYesPhraseIndex((prevIndex) => (prevIndex + 1) % yesPhrases.length);
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
          <div className="text">{yesPhrases[yesPhraseIndex]}</div>
          <audio autoPlay={isPlaying} loop>
            <source src="https://raw.githubusercontent.com/Preksha0420/Valentine/master/music2.mp3" type="audio/mp3" />
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
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="playPauseButton">
              {isPlaying ? "Pause Music" : "Play Music"}
            </button>
          </div>
          {isPlaying && (
            <audio autoPlay loop>
              <source src="https://raw.githubusercontent.com/Preksha0420/Valentine/master/music2.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          )}
        </>
      )}
    </div>
  );
}

export default App;
import React, { useState } from "react";
import "./App.css";

const audio = new Audio('Ed Sheeran - Perfect.mp3');
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
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function handlePlayButtonClick() {
    setIsAudioPlaying(!isAudioPlaying);

    if (isAudioPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
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
          <div className="text">Yay!!!! I love you Momo!</div>
          <audio autoPlay loop muted>
            <source src="Ed Sheeran - Perfect.mp3" type="audio/mp3" />
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
              className={`playButton ${isAudioPlaying ? 'pause' : 'play'}`}
              onClick={handlePlayButtonClick}
            >
              {isAudioPlaying ? 'Pause' : 'Play'}
            </button>
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
          <audio autoPlay loop muted>
            <source src="Ed Sheeran - Perfect.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
    </div>
  );
}

export default App;
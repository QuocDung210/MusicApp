import { useEffect, useRef, useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./MusicOptions.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faRandom,
  faRotateRight,
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import Context from "~/store/Context";
import {
  setCurrentPlay,
  setNextMusic,
  setPrevMusic,
  setRandom,
  setRepeat,
} from "~/store/Actions";
import TimeSlider from "react-input-slider";

const cx = classNames.bind(styles);
function MusicOptions() {
  const [state, dispatch] = useContext(Context);

  const { currentIndex, a, currentPlay, isRandom, isRepeat, songs } = state;

  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolumnLevel, setCurrentVolumeLevel] = useState(100);
  const [durationTime, setDurationTime] = useState(0);
  const audioRef = useRef();
  const arrSong = useRef([]);

  useEffect(() => {
    if (!play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [play, currentIndex]);

  function random() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * songs.length);
      if (arrSong.current.includes(newIndex)) {
        newIndex = currentIndex;
      }
    } while (newIndex === currentIndex);
    return newIndex;
  }

  function randomSong(index) {
    let newSongIndex;
    if (!arrSong.current.includes(index)) {
      arrSong.current.push(index);
    }
    if (arrSong.current.length < songs.length) {
      newSongIndex = random();
    } else {
      arrSong.current = [];
      newSongIndex = random();
    }
    return newSongIndex;
  }

  const handleNextSong = () => {
    let nextIndex;
    if (!isRandom) {
      if (currentIndex === songs.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
    } else {
      nextIndex = randomSong(currentIndex);
    }
    if (nextIndex !== undefined) {
      dispatch(setNextMusic(nextIndex));
      setPlay(true);
    }
  };

  const handlePrevSong = () => {
    let prevIndex;
    if (!isRandom) {
      if (currentIndex === 0) {
        prevIndex = songs.length - 1;
      } else {
        prevIndex = currentIndex - 1;
      }
    } else {
      prevIndex = randomSong(currentIndex);
    }
    if (prevIndex !== undefined) {
      dispatch(setPrevMusic(prevIndex));
      setPlay(true);
    }
  };

  const handleChangeSlider = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);
  };

  const handleChangeVolumn = (e) => {
    setCurrentVolumeLevel(e.target.value);
    audioRef.current.volume = e.target.value / 100;
  };

  const handlePlay = () => {
    dispatch(setCurrentPlay(true));
  };

  const handlePause = () => {
    dispatch(setCurrentPlay(false));
  };

  const handleAutoNextSong = () => {
    if (isRepeat) {
      audioRef.current.play();
    } else if (isRandom) {
      if (arrSong.current.length < songs.length - 1) {
        handleNextSong();
      }
    } else {
      if (currentIndex < songs.length - 1) {
        handleNextSong();
      }
    }
  };

  const handleSetRepeat = () => {
    const repeat = isRepeat ? false : true;
    dispatch(setRepeat(repeat));
  };

  const handleSetRandom = () => {
    arrSong.current = [];
    dispatch(setRandom(!isRandom));
  };

  const [visible, setVisible] = useState(false);

  const handleClickVolumnIcon = (e) => {
    setVisible(!visible);
  };

  return (
    <div className={cx("wrapper")}>
      <ul className={cx("music__options-list")}>
        <li
          className={cx(
            "music__options-item",
            `${isRepeat && "music__options-item-click"}`
          )}
          onClick={handleSetRepeat}
        >
          <FontAwesomeIcon icon={faRotateRight} />
        </li>
        <li className={cx("music__options-item")} onClick={handlePrevSong}>
          <FontAwesomeIcon icon={faBackwardStep} />
        </li>
        <li
          className={cx("music__options-item")}
          onClick={() => setPlay(!play)}
        >
          {!play ? (
            <FontAwesomeIcon icon={faCirclePlay} />
          ) : (
            <FontAwesomeIcon icon={faCirclePause} />
          )}
        </li>
        <li className={cx("music__options-item")} onClick={handleNextSong}>
          <FontAwesomeIcon icon={faForwardStep} />
        </li>
        <li
          className={cx(
            "music__options-item",
            `${isRandom && "music__options-item-click"}`
          )}
          onClick={handleSetRandom}
        >
          <FontAwesomeIcon icon={faRandom} />
        </li>
      </ul>

      <div style={{ position: "absolute", top: "20px" }}>
        <div
          style={{ color: "purple", cursor: "pointer" }}
          onClick={handleClickVolumnIcon}
        >
          <FontAwesomeIcon
            icon={faVolumeHigh}
            style={{
              display: currentVolumnLevel >= 50 ? "block" : "none",
            }}
          />
          <FontAwesomeIcon
            icon={faVolumeLow}
            style={{
              display:
                currentVolumnLevel > 1 && currentVolumnLevel < 50
                  ? "block"
                  : "none",
            }}
          />
          <FontAwesomeIcon
            icon={faVolumeOff}
            style={{
              display: currentVolumnLevel <= 1 ? "block" : "none",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "-44px",
            bottom: "-75px",
            display: visible ? "flex" : "none",
            alignItems: "center",
            width: "100px",
            height: "40px",
            boxShadow: "4px 2px 10px gray",
            borderRadius: "10px",
            background: "white",
            padding: "2px 4px",
            transform: "rotate(90deg)",
          }}
        >
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="100"
            value={currentVolumnLevel}
            style={{ width: "100%" }}
            onChange={handleChangeVolumn}
          />
        </div>
      </div>
      <TimeSlider
        axis="x"
        xmax={durationTime}
        x={currentTime}
        onChange={handleChangeSlider}
        styles={{
          track: {
            backgroundColor: "#ccc",
            height: "4px",
            width: "100%",
            marginTop: "30px",
          },
          active: {
            marginTop: "-1px",
            background: "linear-gradient(120deg,purple,#a200ff)",
            height: "6px",
          },
          thumb: {
            border: "1px solid #333",
            width: "15px",
            height: "15px",
          },
          disabled: {
            opacity: 0.5,
          },
        }}
      />
      <audio
        src={songs[currentIndex].music}
        ref={audioRef}
        onLoadedData={() => setDurationTime(audioRef.current.duration)}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleAutoNextSong}
      ></audio>
    </div>
  );
}

export default MusicOptions;

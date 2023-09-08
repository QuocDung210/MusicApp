import music from "~/assets/musics/music.mp3";
import music1 from "~/assets/musics/music1.mp3";
import music2 from "~/assets/musics/music2.mp3";
import music3 from "~/assets/musics/music3.mp3";
import music4 from "~/assets/musics/music4.mp3";
import img1 from "~/assets/imgs/img1.jpg";
import img2 from "~/assets/imgs/img2.jpg";
import img3 from "~/assets/imgs/img3.jpg";
import img4 from "~/assets/imgs/img4.jpg";
import {
  SET_CURRENT_PLAY,
  SET_NEXT,
  SET_PREV,
  SET_RANDOM,
  SET_REPEAT,
  SET_SELECT_SONG,
} from "./Constants";

export const initState = {
  currentIndex: 0,
  a: [],
  currentPlay: false,
  isRandom: false,
  isRepeat: false,
  songs: [
    {
      name: "Có chơi có chịu",
      singer: "KARIK x ONLY C",
      image: img1,
      music: music,
    },
    {
      name: "Để rồi tổn thương",
      singer: "Sara Luu x Jaykii",
      image: img3,
      music: music1,
    },
    {
      name: "Hay là trăng nói",
      singer: "DATKAA x Prod",
      image: img2,
      music: music2,
    },
    {
      name: "Nước ngoài",
      singer: "Phan Mạnh Quỳnh",
      image: img4,
      music: music3,
    },
    {
      name: "Em lấy chồng",
      singer: "Khắc Việt",
      image: img1,
      music: music4,
    },
  ],
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_NEXT:
      return {
        ...state,
        currentIndex: action.payload,
      };
    case SET_PREV:
      return {
        ...state,
        currentIndex: action.payload,
      };
    case SET_CURRENT_PLAY:
      return {
        ...state,
        currentPlay: action.payload,
      };
    case SET_REPEAT:
      return {
        ...state,
        isRepeat: action.payload,
      };
    case SET_RANDOM:
      return {
        ...state,
        isRandom: action.payload,
      };
    case SET_SELECT_SONG:
      return {
        ...state,
        currentIndex: action.payload,
      };
    default:
      throw new Error("Error!");
  }
}

export default reducer;

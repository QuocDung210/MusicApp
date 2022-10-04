import { SET_CURRENT_PLAY, SET_NEXT, SET_PREV, SET_RANDOM, SET_REPEAT, SET_SELECT_SONG } from "./Constants";

export const setNextMusic = (payload) => ({
    type : SET_NEXT,
    payload
})

export const setPrevMusic = (payload) => ({
    type : SET_PREV,
    payload
})

export const setRandom = payload => ({
    type : SET_RANDOM,
    payload
})

export const setRepeat = payload => ({
    type : SET_REPEAT,
    payload
})

export const setCurrentPlay = payload => ({
    type : SET_CURRENT_PLAY,
    payload
})

export const setSelectSong = payload => ({
    type : SET_SELECT_SONG,
    payload
})



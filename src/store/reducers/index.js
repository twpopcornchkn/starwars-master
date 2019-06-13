import * as at from "../actionTypes";

const initialState = {
    loader: false,
    character: 0,
    charHeight: "???",
    charMass: "???",
    movieList: [],
    latestMovie: {}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case at.GET_CHARACTER:
        return {
          ...state,
          character: action.character
        };
      case at.LOAD_CHARACTER_INFO:
        return {
          ...state,
          charHeight: action.charHeight,
          charMass: action.charMass
        };
      case at.LOAD_MOVIE_DATA:
        return {
          ...state,
          movieList: action.movieList
        };
      case at.LOAD_LATEST_MOVIE:
        return {
          ...state,
          latestMovie: action.latestMovie
        };
      case at.ADD_LOADER:
        return {
          ...state,
          loader: true
        };
      case at.REMOVE_LOADER:
        return {
          ...state,
          loader: false
        };
      default:
        return state;
    }
  }
  
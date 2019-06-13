import {GET_CHARACTER, LOAD_CHARACTER_INFO, LOAD_MOVIE_DATA, LOAD_LATEST_MOVIE, ADD_LOADER, REMOVE_LOADER} from "../actionTypes";
import axios from "axios";


export function getCharacter(character) {
    return {
      type: GET_CHARACTER,
      character
    };
  }
export function loadCharacter(charHeight, charMass) {
    return {
      type: LOAD_CHARACTER_INFO,
      charHeight,
      charMass
    };
  }
export function loadMovieData(movieList) {
    return {
      type: LOAD_MOVIE_DATA,
      movieList
    };
  }
export function loadLatestMovieData(latestMovie) {
    return {
      type: LOAD_LATEST_MOVIE,
      latestMovie
    };
  }
export function enableLoader() {
    return {
      type: ADD_LOADER,
      loader: true
    };
  }
export function disableLoader() {
    return {
      type: REMOVE_LOADER,
      loader: false
    };
  }


export function fetchCharacter(id){
    return dispatch =>{
        dispatch(enableLoader());
        axios.get("https://swapi.co/api/people/"+ id)
        .then(res => {
                dispatch(loadCharacter(res.data.height, res.data.mass))
                dispatch(fetchMovieData(res.data.films));
        })
        .catch(err => 
                console.log(err)    
        )  
    }
}
  
export const fetchMovieData = urlList =>{
    return dispatch => {
        dispatch(enableLoader());
        let promiseArr = urlList.map(url=>axios.get(url).then(res=>{
            return res.data;
        }));
        Promise.all(promiseArr).then(res => {
            dispatch(loadMovieData(res));
            dispatch(disableLoader());
            dispatch(findLatestMovie(res));

        })
        .catch(err => console.log(err));

    }
}

export const findLatestMovie = movieList => {
    return dispatch => {
        let latestMovie = null;
        movieList.forEach(element => {
                if(latestMovie == null){
                    latestMovie = element;
                } else if (new Date(element.release_date) > new Date(latestMovie.release_date)){
                    latestMovie = element;
                }

        });
    dispatch(loadLatestMovieData(latestMovie));

    }   
}
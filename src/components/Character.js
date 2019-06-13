import React from 'react';
import MovieList  from '../components/MovieList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const Character = (props) =>{
    let movie = props.movieList.map((movie, index)=>(
        <MovieList key={index} movieTitle={movie.title} movieDate={movie.release_date} />
    ))

    return(
        <div>
            <List>
                <ListItem button>Height: {props.height}</ListItem>
                <ListItem button>Mass: {props.mass}</ListItem>
            </List>
            <h2>Movie list</h2>
            <List>
                {movie}
            </List>
            <p><strong>Last seen in: ({props.latestMovie.title} / {props.latestMovie.release_date}).</strong></p>
        </div>
    );

}
    


export default Character;
import React from 'react';
import ListItem from '@material-ui/core/ListItem';

const MovieList = (props) =>(
                <ListItem button>
                    ({props.movieTitle}) -  {props.movieDate}
                </ListItem>
);

export default MovieList;
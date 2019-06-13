import React from 'react';
import './App.css';
import Main from "./containers/Main";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

//API url/doc = https://swapi.co/

function App() {
  return (
    <Container maxWidth="lg">
      <Paper className="App">
          <blockquote className="instructions">
            <h4>Instructions </h4>
            <p>API doc: https://swapi.co/</p>
            Required:
            <ul>
              <li>Give an EOT: 2 hour</li>
              <li>ES6 / RESTful API </li>
              <li>Use yarn</li>
              <li>Redux (or other state management library). Do not use react state. </li>
              <li>If user select "None", hide all info and show a message: "Please select a character"</li>
            </ul>
            Bonus
            <ul>
              <li>If user select a character, show "Loading..." while API is fetching</li>
              <li>Material-ui components (https://material-ui.com/)</li>
              <li>make it looks good (desktop/mobile)</li>
              <li>unit test - check if dropdown onChange render data</li>
            </ul>
          </blockquote>
          <Main/>
      </Paper>
    </Container>
  );
}

export default App;

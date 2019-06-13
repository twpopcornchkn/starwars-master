import React, {Component} from "react";
import Character from "../components/Character";
import { connect } from "react-redux";
import {getCharacter, fetchCharacter} from "../store/actions/"
import Loader  from "../components/loader"; 
import NativeSelect from '@material-ui/core/NativeSelect';


class Main extends Component {
    state = {
        showCharacter: false
    }

    handleSelector = event  => {
        event.preventDefault();
        this.props.getCharacter(event.target.value);
        if(event.target.value!=="0"){
            this.setState({showCharacter: true})
            this.props.fetchCharacter(event.target.value); 
        }
        else{
            this.setState({showCharacter: false})
        }
    }


    render(){
        let character = <p className="red">Please select a character</p>;
        if(this.state.showCharacter && !this.props.loader){
            character = <Character 
                height={this.props.height} 
                mass={this.props.mass}
                movieList={this.props.movieList}
                latestMovie = {this.props.latestMovie}
                />
        } else if(this.props.loader){
            character = <Loader/>;
        }
        return(
            <div>
                <h1>Star Wars App </h1>
                <NativeSelect onChange={this.handleSelector} value={this.props.character}>
                    <option value="0">None</option>
                    <option value="1">Luke Skywalker</option>
                    <option value="2">C-3PO</option>
                    <option value="6">Owen Lars</option>
                </NativeSelect>
                {character}
            </div>
        );

    }

}

function mapStateToProps(reduxState){
    return {
        character: reduxState.character,
        height: reduxState.charHeight,
        mass: reduxState.charMass,
        movieList: reduxState.movieList,
        latestMovie: reduxState.latestMovie, 
        loader: reduxState.loader
    }
}

export default connect(
    mapStateToProps,
    { getCharacter, fetchCharacter }
  )(Main);
  

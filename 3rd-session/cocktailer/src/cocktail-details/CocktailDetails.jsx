import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CocktailDetails extends Component {

    constructor(props){
        super(props)
        this.state={cocktailData:undefined}
    }

    componentDidMount(){
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.cocktailId)
            .then(response => {
                console.log(response);
                this.setState({cocktailData: response.data.drinks[0]});
            });
    }

    render(){
        return <>
            {this.renderDetails()}
            <Link to={'/'}>Back to homepage</Link>
        </>
    }

    renderDetails(){
        if(!this.state.cocktailData){
            return <p>loading...</p>
        }

        return <>
            <h2>name: {this.state.cocktailData.strDrink}</h2>
            <p>instructions: {this.state.cocktailData.strInstructions}</p>
            <p>instructions (but in german for some reason): {this.state.cocktailData.strInstructionsDE}</p>
        </>
    }
}

export default CocktailDetails;
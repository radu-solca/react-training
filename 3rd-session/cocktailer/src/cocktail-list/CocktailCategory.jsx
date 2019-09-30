import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import CocktailCard from './CocktailCard.jsx';

import './CocktailCategory.css';

class CocktailCategory extends React.Component {

    constructor(props){
        super(props)
        this.state={cocktails:[]}
    }

    componentDidMount(){
        axios.get(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'+
            this.props.category.filterType+'='+
            this.props.category.title.replace(' ', '_')
        ).then(response => {
            this.setState({
                cocktails: response.data.drinks.slice(0,4).map(apiDrink => 
                    {return {id: apiDrink.idDrink, name:apiDrink.strDrink, thumbnailUrl:apiDrink.strDrinkThumb}}
                )
            })
        })
    }

    render(){
        return <>
            <h2>{this.props.category.title}</h2>
            <div class='category-container'>
                {this.state.cocktails.map(cocktail => 
                    <Link to={'/cocktails/'+cocktail.id}>
                        <CocktailCard key={cocktail.name} thumbnailUrl={cocktail.thumbnailUrl} text={cocktail.name}/>    
                    </Link>
                )}
            </div>
        </>
    }
}

export default CocktailCategory;
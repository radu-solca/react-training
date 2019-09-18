import React from 'react';
import axios from 'axios';

import CocktailCard from './CocktailCard.jsx';

import './CocktailCategory.css';

class CocktailCategory extends React.Component {

    constructor(props){
        super(props)
        this.state={cocktails:[]}
        alert('constructing!');
    }

    componentDidMount(){
        alert("mounting!");
        axios.get(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'+
            this.props.category.filterType+'='+
            this.props.category.title.replace(' ', '_')
        ).then(response => {
            console.log(response, response.data, response.data.drinks);
            this.setState({
                cocktails: response.data.drinks.slice(0,4).map(apiDrink => 
                    {return {name:apiDrink.strDrink, thumbnailUrl:apiDrink.strDrinkThumb}}
                )
            })
        })
    }

    componentWillUnmount(){
        alert("unmounting!");
    }

    render(){
        return <>
            <h2>{this.props.category.title}</h2>
            <div class='category-container'>
                {this.state.cocktails.map(cocktail => 
                    <CocktailCard key={cocktail.name} thumbnailUrl={cocktail.thumbnailUrl} text={cocktail.name}/>    
                )}
            </div>
        </>
    }
}

export default CocktailCategory;
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import FeedbackForm from './FeedbackForm';

const CocktailDetails = ({cocktailId}) => {
    const [cocktail, setCocktail] = useState(null);
    useEffect(
        () => {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId)
                .then(response => {
                    setCocktail(response.data.drinks[0]);
                });
        },
        [setCocktail] // <- does not render unless one of those is changed (???)
    )

    const render = () => {
        return <>
            {renderDetails()}
            <Link to={'/'}>Back to homepage</Link>
            <FeedbackForm/>
        </>
    }

    const renderDetails = () => {
        if(!cocktail){
            return <p>loading...</p>
        }

        return <>
            <h2>name: {cocktail.strDrink}</h2>
            <p>instructions: {cocktail.strInstructions}</p>
            <p>instructions (but in german for some reason): {cocktail.strInstructionsDE}</p>
        </>
    }

    return render();
}

// old class component:

// class CocktailDetails extends Component {

//     constructor(props){
//         super(props)
//         this.state={cocktailData:undefined}
//     }

//     componentDidMount(){
//         axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.cocktailId)
//             .then(response => {
//                 console.log(response);
//                 this.setState({cocktailData: response.data.drinks[0]});
//             });
//     }

//     render(){
//         return <>
//             {this.renderDetails()}
//             <Link to={'/'}>Back to homepage</Link>
//             <FeedbackForm/>
//         </>
//     }

//     renderDetails(){
//         if(!this.state.cocktailData){
//             return <p>loading...</p>
//         }

//         return <>
//             <h2>name: {this.state.cocktailData.strDrink}</h2>
//             <p>instructions: {this.state.cocktailData.strInstructions}</p>
//             <p>instructions (but in german for some reason): {this.state.cocktailData.strInstructionsDE}</p>
//         </>
//     }
// }

export default CocktailDetails;
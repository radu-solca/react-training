import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './shared/header/Header';
import Footer from './shared/Footer';
import Search from './cocktail-list/Search';
import CocktailCategory from './cocktail-list/CocktailCategory';

const categories = [
  {
    title: 'Alcoholic',
    filterType: 'a'
  },
  {
    title: 'Non Alcoholic',
    filterType: 'a'
  },
  {
    title: 'Ordinary Drink',
    filterType: 'c'
  },
  {
    title: 'Cocktail Glass',
    filterType: 'g'
  },
  {
    title: 'Champagne Flute',
    filterType: 'g'
  }
];

class App extends Component{

  render(){
    return (
      <Router>
        <Header categories={categories}/>
        <Search/>

        {categories.map(category =>
          <Route 
            category={category} 
            path={'/'+category.title} 
            render={() => <CocktailCategory category={category}/>}
          />
        )}
        
        <Footer/>
      </Router>
    );
  }
}

export default App;

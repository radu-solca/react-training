import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './shared/header/Header';
import Footer from './shared/Footer';
import Search from './cocktail-list/Search';
import CocktailCategory from './cocktail-list/CocktailCategory';
import CocktailDetails from './cocktail-details/CocktailDetails';

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
            exact
            path={'/'+category.title} 
            render={() => <CocktailCategory category={category}/>}
          />
        )}

        <Route 
          exact
          path={'/cocktails/:id'} 
          render={(routerProps) => <CocktailDetails cocktailId={routerProps.match.params['id']}/>}
        />

        <Route 
          exact
          path={'/'} 
          render={() => categories.map(category =>
              <CocktailCategory category={category}/>
          )}>
        </Route>
        
        <Footer/>
      </Router>
    );
  }
}

export default App;

import React, {Component} from 'react';
import SearchInput from './SearchInput';
import SearchResult from './SearchResults';
import withBorder from '../hoc/withBorder.js';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    render() {
        return <>
            <SearchInput onSearchValueChange={this.updateSearchValue}/>
            {this.state.searchValue && 
                <SearchResult searchValue={this.state.searchValue}/>
            }
        </>
    }

    updateSearchValue = (newSearchValue) => {
        this.setState({
            searchValue: newSearchValue 
        });
    }
}

export default withBorder(Search, 'red');
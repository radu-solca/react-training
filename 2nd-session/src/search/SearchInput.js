import React from 'react';
import withBorder from '../hoc/withBorder.js';

const SearchInput = ({onSearchValueChange}) => {

    let searchValue = '';
    
    const setSearchValue = (event) => {
        searchValue = event.target.value;
    }

    const updateSearchValue = () => {
        onSearchValueChange(searchValue);
    }

    return <>
        <input type="text" onChange={setSearchValue}></input>
        <button onClick={updateSearchValue}>Search</button>
    </>
}

export default withBorder(SearchInput);
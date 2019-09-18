import React from 'react';
import withBorder from '../hoc/withBorder.js';

const SearchResult = ({searchValue}) => {

    return <p>{searchValue}</p>
}

export default withBorder(SearchResult);
import React from 'react';
import Title from './Title';
import Menu from './Menu';


const Header = ({categories}) => {
    return <>
        <Title/>
        <Menu categories={categories}/>
    </>
}

export default Header;
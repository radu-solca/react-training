import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = ({categories}) => {
    return <div class='menu-container'>
        {categories.map(category => 
            <Link className='menu-item' to={'/'+category.title}>{category.title}</Link>
        )}
    </div>
}

export default Menu;
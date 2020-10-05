import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

function Header({cartLength}) {
    return(
        <div className='header-container'>
            <header>
                <div className='nav-logo'>
                    <Link to='/'><h1>Some Logo</h1></Link>
                </div>
                <div className='nav-search-bar'>
                    <input type='text' />
                    <button>GO</button>
                </div>
                <div className='nav-bar'>
                    <Link to='/cart'>Cart ({cartLength()})</Link>
                </div>
            </header>
        </div>
    );
}

export default Header
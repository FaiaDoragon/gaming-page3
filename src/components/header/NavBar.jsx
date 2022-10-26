import React from 'react'

export const NavBar = () => {
    return (
        <div id='nav-bar'>
            <div>
                <ul>
                    <a href=""><li>PS4</li></a>
                    <a href=""><li>PS5</li></a>
                    <a href=""><li>Nintendo Switch</li></a>
                    <a href=""><li>PC</li></a>
                </ul>
            </div>
            <div id='search-bar'>
                <input className='search-bar' placeholder='Buscar Juego' />
                <button className='search-btn'>
                    Buscar
                </button>
                <div className='fav-search'>
                    Favorite games ❤️ {'5'}
                </div>
            </div>
            <div>
                <ul>
                    <li>login</li>
                    <li>register</li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react'

export const NavBar = () => {
    return (
        <div id='nav-bar'>
            <div className='nav-bar'>
                <ul>
                    <a href=""><li>PS4</li></a>
                    <a href=""><li>PS5</li></a>
                    <a href=""><li>Nintendo Switch</li></a>
                    <a href=""><li>PC</li></a>
                </ul>
            </div>
            <div className='search-bar'>
                <input placeholder='Buscar Juego' />
                <button>
                    Buscar
                </button>
                <div className='fav-search'>
                    Favorite games ❤️ {'5'}
                </div>
            </div>
            <div className='nav-bar'>
                <ul>
                    <li>login</li>
                    <li>register</li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react'

import games from '../../data/games.json'

export const Content = (props) => {

  const { title } = props;

  return (
    <div className='game-content'>
      {
        games.map(games => {
          return (
            <div className='card-game' key={games.id}>
              <img key={games.id} src={games.url} alt={games.title} width="225px" height="288px" title={games.title} />
              <div className='card-game-bottom' >
                <h3> {games.title}</h3>
                <button>❤️</button>
              </div>
            </div>
          )
        })

      }
    </div >
  )
}

import React from 'react'



export const TopBar = () => {
  return (
    <div>
      <div className="topBar">
        <div id="logo">
          <img className='logo' src="src\assets\Logo.png" alt="logo-FaiaGaming" width="188px" height="125px" />
        </div>   
        <div id='networks'>    
          <img className="networks" src="https://dexibell.com/app/uploads/2018/05/facebook-logo.png" alt="facebook" width="50px" height="50px" />
          <img className="networks" src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ" alt="instagram" width="50px" height="50px" />
          <img className="networks" src="https://www.doplerweb.com/data/fotos/1022008841_1_twitter-bird-white-on-blue1.jpg" alt="twitter" width="50px" height="50px" />
        </div>  
      </div>
    </div>
  )
}

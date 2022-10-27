import React from 'react'
import { NavBar } from './header/NavBar'
import { TopBar } from './header/TopBar'
import { Content } from './boddy/Countent'

import '../css/topbar.css'
import '../css/navbar.css'
import '../css/navbar.css'
import '../css/content.css'

import { LeftColumn } from './boddy/LeftColumn'
import { RightColumn } from './boddy/RightColumn'


export const GamingPage = () => {

  return (
    <>
    <TopBar />
    <NavBar />
    <div id='content'>
      <LeftColumn />
      <Content />
      <RightColumn />
    </div>
    </>
  )
}

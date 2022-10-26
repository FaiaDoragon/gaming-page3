import React from 'react'
import { NavBar } from './header/NavBar'
import { TopBar } from './header/TopBar'
import { Countent } from './boddy/Countent'

import '../css/topbar.css'
import '../css/navbar.css'


export const GamingPage = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <Countent />
    </>
  )
}

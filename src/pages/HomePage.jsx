import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Body from './Body'

function Home () {

  return (
    <>
      <Navbar style={{zIndex: "100"}}/>
      <Body/>
    </>
  )
}

export default Home
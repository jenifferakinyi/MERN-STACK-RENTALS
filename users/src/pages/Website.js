import React from 'react'
import Hero from '../components/Hero'
import Residencies from '../components/Residencies'
import Value from '../components/Value'
import Contact from '../components/Contact'

const Website = () => {
  return (
    <div className="App">
        <div className="white-gradient">
            <Hero/>
        </div>
         <Residencies/>
         <Value/>
         <Contact/>
    </div>
  )
}

export default Website
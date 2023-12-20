import React from 'react';
import Header from './Header';
import Hero from './Hero';


const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="max-w-screen-xl m-auto mt-12 bg-red-900">
        {children}
      </div>
    </div>
  )
}

export default Layout
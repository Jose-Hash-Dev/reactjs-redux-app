import React from 'react'
import ProductList from './Components/ProductList/ProductList'
import TopNav from './Components/TopNav/TopNav.js'
import { initializeIcons } from '@fluentui/font-icons-mdl2'
import './App.scss'
initializeIcons()

function App () {
  return (
      <>
          <TopNav />
          <ProductList/>
      </>
  )
}

export default App

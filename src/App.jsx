import React, {  } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Welcome from './components/welcome/Welcome'
import Services from './components/services/Services'
import About from './components/about/About'
import Logos from './components/logos/Logos'
import Blog from './components/blog/Blog'
import Map from './components/map/Map'
import Footer from './components/footer/Footer'

function App() {

  return (
<>
<Navbar/>
<Banner/>
<Welcome/>
<Services/>
<About/>
<Logos/>
<Blog/>
<Map/>
<Footer/>

</>
  )
}

export default App

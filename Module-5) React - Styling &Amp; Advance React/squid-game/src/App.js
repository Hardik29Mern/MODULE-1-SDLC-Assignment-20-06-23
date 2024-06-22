import React,{useEffect} from 'react'
import Home from './components/Home';
import Info from './components/Info';
import Episodes from './components/Episodes';
import Videos from './components/Videos';
import Details from './components/Details';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Home/>
      <Info/>
      <Episodes/>
      <Videos/>
      <Details/>
      <Footer/>
      
    </div>
  )
}

export default App;
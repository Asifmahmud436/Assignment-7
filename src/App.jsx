// import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Players from './Components/Players'

function App() {

  return (
    <div className='max-w-7xl m-auto '>
      <Header/>
      <Hero/>
      <Players/>
    </div>
  )
}

export default App

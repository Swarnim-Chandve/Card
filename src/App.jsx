import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Marquee from "react-fast-marquee";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Marquee className='mt-3 bg-yellow-100 p-3' pauseOnHover direction='left' >

      <Card />
      <Card />
      <Card />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </Marquee>
   
    </>
  )
}

export default App

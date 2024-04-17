import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tab from './tab/t'
import Tabbar from './Tabbar/Tabbar'
import Text from './Text/Text'


import Sliders from './components/Sliders/Sliders'
import SliderInline from './components/Sliders/SliderInline'
import Content from './components/Content/Content'
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Tabbar/>
      <Text/>
      <Sliders/>
      <SliderInline/>
      <Content/>
      <BackgroundVideo/>
     </>
      
   
  )
}

export default App

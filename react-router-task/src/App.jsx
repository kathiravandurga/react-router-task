import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import All from './components/All'
import Fullstack from './components/Fullstack'
import Datascience from './components/Datascience'
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import Mainpage from './components/Mainpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Mainpage>
     <Routes>
      <Route path='/' Component={All} />
      <Route path='/FULL STACK DEVELOPMENT' Component={Fullstack} />
      <Route path='/DATA SCIENCE' Component={Datascience} />
      <Route path='/CYBER SECURITY' Component={Cybersecurity} />
      <Route path='/CAREER' Component={Career} />
      
      
     </Routes>
     </Mainpage>
    
    </>
  )
}

export default App

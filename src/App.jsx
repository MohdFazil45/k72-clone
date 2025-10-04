import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import NavBar from "./components/navigation/NavBar"
import FullScreenNav from "./components/navigation/FullScreenNav"

const App = () => {
  return (
    <div >
      <NavBar/>
      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agence" element={<Agence/>}/>
        <Route path="/works" element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import "./index.css"

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Signup" element={<Signup/>}/>
   </Routes>
  )
}

export default App

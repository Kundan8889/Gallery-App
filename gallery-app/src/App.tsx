import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import "./index.css"
import { AuthProvider } from "./context/auth"
import PublicRouter from "./Router/PublicRouter"
import PrivateRouter from "./Router/PrivateRouter"

function App() {
  return (
    <AuthProvider>
   <Routes>
    <Route path="/" element={
      <PrivateRouter><Home/></PrivateRouter>
    }/>
    <Route path="/Signup" element={
      <PublicRouter>
         <Signup/>
      </PublicRouter>
    }/>
   </Routes>

    </AuthProvider>
  )
}

export default App

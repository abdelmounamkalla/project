import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Main from "./pages/client/main/Main"
import Register from "./pages/client/sign up/register"
import Map from "./pages/client/map/map"
import Login from "./pages/client/login/Login"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main></Main>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
      <Routes>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

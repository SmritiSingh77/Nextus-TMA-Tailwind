import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Welcome from "./pages/Welcome"

export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/welcome" element={<Welcome/>} />
    </Routes>
   </Router>
  )
}
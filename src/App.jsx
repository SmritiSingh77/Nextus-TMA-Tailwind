import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Welcome from "./pages/Welcome"
import Settings from "./pages/settings/Settings"
import Referal from "./pages/referal/Referal"

export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/referal" element={<Referal />} />
    </Routes>
   </Router>
  )
}
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Welcome from "./pages/Welcome"
import Settings from "./pages/settings/Settings"
import Referal from "./pages/referal/Referal"
import DailyTask from "./pages/daily-task/DailyTask"
import Leaderboard from "./pages/leaderboard/Leaderboard"

export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/referal" element={<Referal />} />
      <Route path="/daily-tasks" element={<DailyTask />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
   </Router>
  )
}
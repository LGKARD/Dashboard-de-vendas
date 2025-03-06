import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login, Registration } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/leads" element={<h1>Leads</h1>} />
        <Route path="/perfil" element={<h1>Perfil </h1>} />
      </Routes>
    </Router>
  )
}

export default App

import { Messages, Register } from "./modules";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./routes";
import { Login } from "./modules";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App

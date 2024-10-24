import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import updateProduct from './components/updateProduct';
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/updateProduct/:id' element={<updateProduct />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

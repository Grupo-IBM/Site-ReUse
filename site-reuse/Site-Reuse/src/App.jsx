import './App.css'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import Login from "./pages/login"
import Usuario from './pages/usuario'
// DEPENDENCIAS
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {

  return (
    <div className='Container'>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Cadastro' element={<Cadastro></Cadastro>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Usuario' element={<Usuario></Usuario>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './exercices/nav/Nav'
 
function App() {
   return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/nav' element={<Nav />} />
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './exercices/nav/Nav'
import ListItem from "./exercices/props/ListItem"
import Title from './exercices/props/Title'
import Text from "./exercices/props/Text"
import List from './exercices/props/List'
import Props from './exercices/props/Props'
import Counter from './exercices/state/Counter'
import EmptyString from "./exercices/state/EmptyString"


 
function App() {
 
   return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/nav' element={<Nav />} />     
        <Route path='/props' element={<Props />} />   
        <Route path='/state' element={<Counter />} />     */}
        <Route path='/emptyString' element={<EmptyString />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App

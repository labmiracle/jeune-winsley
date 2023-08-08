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
import FetchingData from "./exercices/eventt/FetchingData"
import PintaTexto from "./exercices/eventt/PintaTexto"
import Select from './exercices/eventt/Select'
import ProtectedRoutes from './exercices/eventt/ProtectedRoutes'
import ConditionalRendering from './exercices/eventt/ConditionalRendering'
import UserNotLoggedIn from './exercices/eventt/UserNotLoggedIn'
import LoggedInUser from './exercices/eventt/LoggedInUser'
import Refs from './exercices/refs/Refs'
import LanguageProvider from './exercices/contextt/LanguageProvider.jsx'
import MainTex from './exercices/contextt/MainTex'



 
function App() {
 
   return (
    <LanguageProvider>      
        <div>
          <MainTex/>
           {/* <Refs/>    */}
        <BrowserRouter>      
          <Routes>
            {/* <Route path='/nav' element={<Nav />} />     
            <Route path='/props' element={<Props />} />   
            <Route path='/state' element={<Counter />} />     */}
            {/* <Route path='/emptyString' element={<EmptyString />} />
            <Route path ="/fetchingdata" element={<FetchingData />}/> */}
            {/* <Route path ="/pintatexto" element={<PintaTexto />}/> */}
            {/* <Route path ="/select" element={<Select />}/> */}
            <Route element={<ProtectedRoutes/>}>
                <Route path ="/usuario-identificado" element={<LoggedInUser/>}/>
            </Route>
            <Route path ="/usuario-anonimo" element={<UserNotLoggedIn/>}/>

          </Routes>
        </BrowserRouter> 
        </div>
    </LanguageProvider>
  )
}

export default App

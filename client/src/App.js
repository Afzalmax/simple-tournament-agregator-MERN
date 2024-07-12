
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import { useEffect,useState } from 'react';
import Home from './Home';
import Form from './Form';
import Card from './Card';

function App() {
 
  return (
    <Router>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/card' element={<Card/>} />
        <Route exact path='/form' element={<Form/>} />
      </Routes>
    </Router>


  )
}

export default App 


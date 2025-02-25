import TelegramAuth from './components/TeleAuth';
import './App.css';
import { createContext } from 'react';
import Catg from './components/Catg';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Test from './components/Test';
import Start_Page from './components/Start_Page';
import Conformation_Page from './components/Conformation_Page';
export const CounterContext = createContext();
function App() {
  const [id,setId]=useState(0);
  
  return (
    
    <div className="App">
      <CounterContext.Provider value={{ id, setId }}>
      <Routes>
        <Route path='/dsad' element={<Test/>}> 
        </Route>
        <Route path='dsad/catg/:catgId' element={<Catg/>} >
        </Route>
        <Route path='dsad/start' element={<Start_Page/>}></Route>
        <Route path='dsad/conformation' element={<Conformation_Page/>}></Route>
      </Routes>
      
      </CounterContext.Provider>
      
  

    </div>
  );
}

export default App;

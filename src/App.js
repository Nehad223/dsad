import TelegramAuth from './components/TeleAuth';
import './App.css';
import { createContext } from 'react';
import Catg from './components/Catg';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Test from './components/Test';
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
      </Routes>
      
      </CounterContext.Provider>
      
    </div>
  );
}

export default App;

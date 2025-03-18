import './App.css';
import { createContext } from 'react';
import Catg from './components/Catg';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Test from './components/Test';
import Start_Page from './components/Start_Page';
import Conformation_Page from './components/Conformation_Page';
import Home_Page from './components/Home_Page';
import Search_Page from './components/Search_Page';
import Cart from './components/Cart';
export const CounterContext = createContext();
function App() {
  const [id,setId]=useState(0);

  return (
    
    <div className="App">
      <CounterContext.Provider value={{ id, setId }}>
      <Routes>
        <Route path='dsad/catg/:catgId' element={<Catg/>} >
        </Route>
        <Route path='/dsad' element={<Start_Page/>}></Route>
        <Route path='dsad/conformation' element={<Conformation_Page/>}></Route>
        <Route path='dsad/home' element={<Home_Page/>} ></Route>
        <Route path='dsad/Test' element={<Test/>} ></Route>
        <Route path='dsad/search' element={<Search_Page/>}></Route>
        <Route path='dsad/cart' element={<Cart/>}></Route>
        
      </Routes>
      
      </CounterContext.Provider>
      
  

    </div>
  );
}

export default App;


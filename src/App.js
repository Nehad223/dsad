import './App.css';
import { createContext } from 'react';
import Catg from './Pages/Catg.js';
import { Route,Routes } from 'react-router-dom';
import Test from './Pages/Test';
import Start_Page from './Pages/Start_Page';
import Conformation_Page from './Pages/Conformation_Page';
import Home_Page from './Pages/Home_Page';
import Search_Page from './Pages/Search_Page';
import Cart from './Pages/Cart';
import Points_Page from './Pages/Points_Page';
import Profile from './Pages/Profile_Page.js';
import { CartProvider } from './context/CartContext';
import Buy_Points from './Pages/Buy_Points.js';
export const CounterContext = createContext();
function App() {

  return (
    <CartProvider>
    <div className="App">
      <Routes>
        <Route path='/dsad/home/catg/:catgId/:doctorORstudent' element={<Catg/>} />
        <Route path='/dsad' element={<Start_Page/>} />
        <Route path='/dsad/conformation' element={<Conformation_Page/>} />
        <Route path='/dsad/home' element={<Home_Page/>} />
        <Route path='/dsad/Test' element={<Test/>} />
        <Route path='/dsad/search' element={<Search_Page/>} />
        <Route path='/dsad/cart' element={<Cart/>} />
        <Route path='/dsad/profile' element={<Profile/>} />
        <Route path='/dsad/points' element={<Points_Page/>} />
        <Route path='/dsad/points/buy/points' element={<Buy_Points/>} />
      </Routes>
    </div>
  </CartProvider>
  
  );
}

export default App;


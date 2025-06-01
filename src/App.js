import './App.css';
import { createContext } from 'react';
import Catg from './Pages/Catg.js';
import { Route,Routes } from 'react-router-dom';
import Test from './Pages/Test';
import Start_Page from './Pages/Start_Page';
import Conformation_Page from './Pages/Conformation_Page';
import Home_Page from './Pages/Home_Page';
import Cart from './Pages/Cart';
import Points_Page from './Pages/Points_Page';
import { CartProvider } from './context/CartContext.js';
import Buy_Points from './Pages/Buy_Points.js';
import Buy_Money from './Pages/Buy_Money.js'
import Test2 from './Pages/Test2.js';
import Test3 from './Pages/Test3.js';
import Home from './Admin/Pages/Home.js'
import Add from './Admin/Pages/Add.js';
import Edit from './Admin/Pages/Edit.js'
import Add_Packages from './Admin/Pages/Add_Packages.js';
import Add_Money from './Admin/Pages/Add_Money.js';
import Add_Points from './Admin/Pages/Add_Points.js';
import Add_Category from './Admin/Pages/Add_Category.js';
import Edit_Category from './Admin/Pages/Edit_Category.js';
import Edit_Category_by_Id from './Admin/Pages/Edit_Category_by_Id.js';
import Points from './Admin/Pages/Points.js';
import Orders from './Admin/Pages/Orders.js';
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
        <Route path='/dsad/cart' element={<Cart/>} />
        <Route path='/dsad/profile' element={<Points_Page/>} />
        <Route path='/dsad/profile/buy/:id' element={<Buy_Points/>} />
        <Route path='/dsad/home/buy/:itemORpackage/:id' element={<Buy_Money/>} />
        <Route path='/admin/home' element={<Home/>} />
        <Route path='/admin/add' element={<Add/>} />
        <Route path='admin/points' element={<Points/>}/>
        <Route path='/admin/add/pacakges' element={<Add_Packages/>}/>
        <Route path='/admin/add/points'  element={<Add_Points/>}/>
        <Route path='/admin/orders' element={<Orders/>} />
        <Route path='/admin/add/money'  element={<Add_Money/>}/>
        <Route path='/admin/add/category'  element={<Add_Category/>}/>
        <Route path='/admin/edit' element={<Edit/>} />
        <Route path='admin/edit/category' element={<Edit_Category/>} />
        <Route path='admin/edit/category/:doctorOrstudent/:catgid' element={<Edit_Category_by_Id/>} />


      </Routes>
    </div>
  </CartProvider>
  
  );
}

export default App;


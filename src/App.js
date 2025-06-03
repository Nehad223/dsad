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
import Order_Item_Money from './Admin/Pages/Order_Item_Money.js';
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
import User from './Admin/Pages/User.js';
import Orders_Points from './Admin/Pages/Orders_Points.js';
import Orders_Money from './Admin/Pages/Orders_Money.js';
import Edit_Packages from './Admin/Pages/Edit_Packages.js';
import Edit_Money from './Admin/Pages/Edit_Money.js';
import EditPackage from './Admin/Pages/EditPackage.js';
import Edit_Points from './Admin/Pages/Edit_Points.js';
import Edit_Points_Page from './Admin/Pages/Edit_Points_Page.js';
import Edit_Money_Page from './Admin/Pages/Edit_Money_Page.js';
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
        <Route path='admin/user' element={<User/>} />
        <Route path='/admin/add/pacakges' element={<Add_Packages/>}/>
        <Route path='/admin/add/points'  element={<Add_Points/>}/>
        <Route path='/admin/orders' element={<Orders/>} />
        <Route path='/admin/orders/points' element={<Orders_Points/>} />
        <Route path='/admin/orders/money' element={<Orders_Money/>}/>
        <Route path='/admin/orders/money/:index/:id' element={<Order_Item_Money/>} />
        <Route path='/admin/add/money'  element={<Add_Money/>}/>
        <Route path='/admin/add/category'  element={<Add_Category/>}/>
        <Route path='/admin/edit' element={<Edit/>} />
        <Route path='admin/edit/category' element={<Edit_Category/>} />
        <Route path='/admin/edit/money' element={<Edit_Money/>} />
        <Route path='/admin/edit/money/:doctorOrstudent/:catgid' element={<Edit_Money_Page/>} />
        <Route path='admin/edit/points' element={<Edit_Points/>}/>
        <Route path='admin/edit/points/:id' element={<Edit_Points_Page/>}/>
        <Route path='/admin/edit/packages' element={<Edit_Packages/>} />
        <Route path='/admin/edit/packages/:id' element={<EditPackage/>} />
        <Route path='admin/edit/category/:doctorOrstudent/:catgid' element={<Edit_Category_by_Id/>} />


      </Routes>
    </div>
  </CartProvider>
  
  );
}

export default App;


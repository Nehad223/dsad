import './App.css';
import { createContext } from 'react';
import Catg from './Pages/Catg.js';
import ProtectedRoute from './Admin/components/Protected_Routes.js';
import Auth_Admin from './Admin/Pages/Auth_Admin.js';
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
import MonthOrders from './Admin/Pages/MonthOrders.js';
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
import PurchaseMonths from './Admin/Pages/Purchase_Months.js';
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
        <Route path='/admin/' element={<Auth_Admin/>} />
        <Route path='/admin/home' element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Home/>
          </ProtectedRoute>
              } />
        <Route path='/admin/add' element={
  <ProtectedRoute allowedRoles={["admin"]}>
    <Add/>
  </ProtectedRoute>
} />
        <Route path='/admin/points' element={
          <ProtectedRoute allowedRoles={["admin"]}><Points/></ProtectedRoute>
          }/>
        <Route path='/admin/user' element={
          <ProtectedRoute allowedRoles={["admin"]}>  <User/></ProtectedRoute>
        } />

        <Route path='/admin/add/pacakges' element={
          <ProtectedRoute allowedRoles={["admin"]}><Add_Packages/></ProtectedRoute>
          
          }/>
        <Route path='/admin/add/points'  element={
          <ProtectedRoute allowedRoles={["admin"]}> <Add_Points/></ProtectedRoute>
         
          }/>
        <Route path='/admin/orders' element={
            <ProtectedRoute allowedRoles={["admin", "sub_admin"]}><Orders/></ProtectedRoute>
          
          } />
        <Route path='/admin/orders/points' element={
            <ProtectedRoute allowedRoles={["admin", "sub_admin"]}> <Orders_Points/></ProtectedRoute>
         
          } />

        <Route path='/admin/orders/money' element={
            <ProtectedRoute allowedRoles={["admin", "sub_admin"]}><Orders_Money/></ProtectedRoute>
          
          }/>
        <Route path='/admin/orders/:MoneyOrPoint/:index/:id' element={
            <ProtectedRoute allowedRoles={["admin", "sub_admin"]}><Order_Item_Money/></ProtectedRoute>
          
          } />
        <Route path='/admin/add/money'  element={
          <ProtectedRoute allowedRoles={["admin"]}><Add_Money/></ProtectedRoute>
          
          }/>
        <Route path='/admin/add/category'  element={
          <ProtectedRoute allowedRoles={["admin"]}><Add_Category/></ProtectedRoute>
          
          }/>
        <Route path='/admin/edit' element={
          <ProtectedRoute allowedRoles={["admin"]}><Edit/></ProtectedRoute>
          
          } />
        <Route path='/admin/edit/category' element={
          <ProtectedRoute allowedRoles={["admin"]}><Edit_Category/></ProtectedRoute>
          
          } />
        <Route path='/admin/edit/money' element={
          <ProtectedRoute allowedRoles={["admin"]}><Edit_Money/></ProtectedRoute>
          
          } />
        <Route path='/admin/edit/money/:doctorOrstudent/:catgid' element={
          <ProtectedRoute allowedRoles={["admin"]}><Edit_Money_Page/></ProtectedRoute>
          
          } />
        <Route path='/admin/edit/points' element={
          <ProtectedRoute allowedRoles={["admin"]}>  <Edit_Points/></ProtectedRoute>
        
          }/>
        <Route path='/admin/edit/points/:id' element={
          <ProtectedRoute allowedRoles={["admin"]}> <Edit_Points_Page/></ProtectedRoute>
         
          }/>
        <Route path='/admin/edit/packages' element={
          <ProtectedRoute allowedRoles={["admin"]}><Edit_Packages/></ProtectedRoute>
          
          } />
        <Route path='/admin/edit/packages/:id' element={
          <ProtectedRoute allowedRoles={["admin"]}><EditPackage/></ProtectedRoute>
          
          } />
        <Route path='/admin/edit/category/:doctorOrstudent/:catgid' element={
          <ProtectedRoute allowedRoles={["admin"]}> <Edit_Category_by_Id/></ProtectedRoute>
         
          } />
          <Route path='/admin/history' element={
            <ProtectedRoute allowedRoles={["admin"]}> 
            <PurchaseMonths/>
            </ProtectedRoute>
      
           
          } />

             <Route path='/admin/history/:month/:year' element={
            <ProtectedRoute allowedRoles={["admin"]}> 
            <MonthOrders/>
            </ProtectedRoute>
      
           
          } />


      </Routes>
    </div>
  </CartProvider>
  
  );
}

export default App;





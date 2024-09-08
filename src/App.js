
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Read from './Page/Read';
import About from './Page/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductForm from './components/ProductForm';
import Dashboard from './Page/Dashboard';
import Login from './Page/Login';
import Register from './Page/Register';
import NotFound from './Page/404';



function App() {
   
    
  return (
    
    <> 
          
          <Routes>
               <Route path='/' element={<MainLayout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/read/:id' element={<Read/>}></Route>
                <Route path='/about-us' element={<About/>}></Route>
                <Route path='/create' element={<ProductForm edit={false} />}></Route>
                <Route path='/edit' element={<ProductForm edit={true}/>}></Route>
                <Route path='/data' element={<Dashboard/>}></Route>
                <Route path='/*' element={<NotFound/>}></Route>
               </Route>

               <Route path='/login' element={<Login/>} />
               <Route path='/register' element={<Register/>} />

          </Routes>
          
     </>
         
        
  );
}

export default App;

function MainLayout () {
     return (
      <>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </>
     )
}

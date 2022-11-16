import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './componet/Layout/Layout';
import Home from './componet/Home/Home';
import Portfolio from './componet/Portfolio/Portfolio';
import About from './componet/About/About';
import Contact from './componet/Contact/Contact';


const routers =createBrowserRouter([
{path:'/' , element:<Layout/>, children:[
  {index:true , element:<Home/>},
  {path:'portfolio' , element:<Portfolio/>},
  {path:'about' , element:<About/>},
  {path:'contact' ,element:<Contact/> }




]}


])
function App() {

  return (
    < >
  <RouterProvider router={routers}/>
    </>
  );
}

export default App;

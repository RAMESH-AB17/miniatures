import React, { useState } from "react";
import "./Layout.css";
import { Outlet, Link, NavLink} from "react-router-dom";
const Layout = () =>{
   const[showProducts, setShowProducts] = useState(false);
   const handleMouseEnter = () => {
      setShowProducts(true);
   };

   const handleMouseLeave = () => {
      setShowProducts(false);
   };
   return <>
   <nav>
    <b className="c">3D Miniatures</b>
    <Link className="a" to="/"> Home</Link>
    <Link className="a" to="/aboutus"> About us</Link>
    <Link className="a" to="/blog"> Blog</Link>
    <Link className="a" to="/contact"> Contact</Link>
    <Link className="a" onMouseEnter={handleMouseEnter} >Our products</Link>   
    {showProducts && (
               <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <NavLink className="a" to="/Product"> 3D Miniatures</NavLink><br/>
                  <NavLink className="a" to="/Miniatures"> Our products</NavLink>
               </ul>
            )}
    <Outlet/>
   </nav>
   </>
}
export default Layout;

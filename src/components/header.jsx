import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/logo.jpg';
 
const Header = () => {
    const links = [
     {label:"Home", url:"/"},
     {label:"Portfolio", url:"/portfolio"}, 
     {label:"Contact Us" , url:"contact"},
    ];
  
  return (
    <nav className=' flex items-center h-[33px] p-10  bg-sky-950 '>
      <div className='flex justify-center items-center w-7 rounded-xl bg-white '>
    <img src={logo} alt="Logo" className='w-full h-full '/>
      </div>
<div className='flex gap-14 items-center justify-end  text-3xl text-white w-[70%] '>
    {links.map(({ label,url }) =>(
    <Link to={url} key={url}>
        {label}
    </Link>
    ))}
    <div><a href="https://medium.com/@nellg.gc">Blog</a></div>
</div>

</nav>

  );
};

export default Header;
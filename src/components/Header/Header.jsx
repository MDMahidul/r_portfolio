import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBarsStaggered,faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [showMenu, setShowMenu] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if (window.pageYOffset > 150) {
                setNavbarBg('gradient-to-r from-teal-500 to-cyan-300'); // Change this to the background color you specified in the Tailwind config
              } else {
                setNavbarBg('transparent');
              }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    const handleMenuToggle = ()=>{
      setShowMenu(!showMenu);
    };

    return (
        <div>
{/*  className={`fixed w-full flex items-center justify-between px-6 py-3 z-50 `}    */}        
<nav className={`fixed top-0 w-full z-10 transition-all ease-out duration-300 ${
        navbarBg !== 'transparent' ? 'bg-gradient-to-r from-teal-500 to-cyan-300 shadow-md ' : 'p-2'}`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <ul className="max-w-screen-xl flex flex-wrap gap-6 items-center ">
    <li className='hover:scale-110'> <a href="#"> <FontAwesomeIcon className='text-white' size="lg" icon={faGithub} /> </a></li>
    <li className='hover:scale-110'> <a href="#"> <FontAwesomeIcon className='text-white' size="lg" icon={faTwitter} /> </a> </li>
    <li className='hover:scale-110'><a href="#"> <FontAwesomeIcon className='text-white' size="lg" icon={faLinkedinIn} /> </a> </li>
   </ul>
    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg    dark:text-gray-400 " aria-controls="navbar-hamburger" aria-expanded="false" onClick={handleMenuToggle}>
    <FontAwesomeIcon className='text-white hover:scale-110' size="2x" icon={faBarsStaggered} />
    </button>
    <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white z-50 ${showMenu ? 'block' : 'hidden'} transition-transform duration-300`}>
            <div  className='text-right'><button  onClick={()=>setShowMenu(false)}><FontAwesomeIcon className='menu-hover'  size='4x' icon={faXmark} /></button></div>
            <div>
            <ul className='flex flex-col items-center justify-center h-screen text-3xl gap-y-8 font-semibold'>
              <li className='menu-hover'><a href="#">Home</a></li>
              <li className='menu-hover'><a href="#">About</a></li>
              <li className='menu-hover'><a href="#">Projects</a></li>
              <li className='menu-hover'><a href="#">Testimonials</a></li>
              <li className='menu-hover'><a href="#">Contact</a></li>
            </ul>
            </div>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;
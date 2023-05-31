import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-zinc-800 pt-14'>
             <div className='flex justify-center items-center gap-10 pb-10'>
                <a href="#" className='rounded-full bg-zinc-700 '> <FontAwesomeIcon className='text-teal-500 footer-link'  icon={faGithub} /> </a>
                <a href="#" className='rounded-full bg-zinc-700 '> <FontAwesomeIcon className='text-teal-500 footer-link'  icon={faTwitter} /> </a> 
                <a href="#" className='rounded-full bg-zinc-700 '> <FontAwesomeIcon className='text-teal-500 footer-link'  icon={faLinkedinIn} /> </a> 
             </div>
            <div  className='max-w-screen-xl  mx-auto py-10 border-t-[1px] border-zinc-500'>
              <h4 className='text-center text-teal-500 text-xl'>MMB TECH © 2023. ALL RIGHTS RESERVED.</h4>
            </div>
        </div>
    );
};

export default Footer;
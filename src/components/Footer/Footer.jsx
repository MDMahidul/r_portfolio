import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-zinc-800 pt-14 px-7'>
             <div className='flex justify-center items-center gap-10 pb-10'>
                <Link target='_blank' to="https://github.com/rubelahmed-aiubian" className='rounded-full bg-zinc-700 '> <FontAwesomeIcon className='text-teal-500 footer-link'  icon={faGithub} /> </Link>
                <Link target='_blank' to="https://twitter.com/RubelAh06856444" className='rounded-full bg-zinc-700 '> <FontAwesomeIcon className='text-teal-500 footer-link'  icon={faTwitter} /> </Link> 
                <Link target='_blank' to="https://www.linkedin.com/in/rubel-ahmed-7ba94b18b/" className='rounded-full bg-zinc-700 '> <FontAwesomeIcon className='text-teal-500 footer-link'  icon={faLinkedinIn} /> </Link> 
             </div>
            <div  className='max-w-screen-xl  mx-auto py-10 border-t-[1px] border-zinc-500'>
              <h4 className='text-center text-teal-500 lg:text-xl'>TECH WORLD BD © 2023. ALL RIGHTS RESERVED.</h4>
            </div>
        </div>
    );
};

export default Footer;
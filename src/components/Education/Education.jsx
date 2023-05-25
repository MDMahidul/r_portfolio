import React from 'react';
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <div className=' bg-zinc-700 pb-20'>
            <div className='flex flex-col items-center pt-28 pb-10'>
                <h1 className='section-title text-5xl'>Education</h1>
            </div>
            <div className='transition-all duration-300 flex flex-col items-center mt-5'>
                    <div className='graduation-hat'>
                            <FontAwesomeIcon icon={faGraduationCap} />
                    </div>  
                </div>
            <div>
               <div className='max-w-screen-xl  mx-auto'>
              <div className='p-10'>
                 <div className="md:pl-10 lg:pl-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 border-2 border-teal-500 rounded-lg p-16">
                    <div className="text-center  ">
                        <p className='education-title'>BACHALOR DEGREE</p>
                        <p className='education-subtitle'>JAN 2009 - MAY 2010 | CREATIVE ALIEN</p>
                    </div>
                    <div className="text-center md:w-9/12 mx-auto">
                        <p className='education-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, hic sunt? Atque sunt officia doloribus est dolores, non voluptates quasi maiores eaque aliquid quos itaque!</p>
                    </div> 
                 </div>
                 <div className="md:pl-10 lg:pl-0  grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 border-2 border-teal-500 rounded-lg p-16">
                    <div className="text-center lg:order-2 md:order-2">
                        <p className='education-title'>HIGHER SECONDARY SCHOOL CERTIFICATE</p>
                        <p className='education-subtitle'>JAN 2009 - MAY 2010 | CREATIVE ALIEN</p>
                    </div>
                    <div className="text-center md:w-9/12 mx-auto md:order-1 lg:order-1">
                        <p className='education-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, hic sunt? Atque sunt officia doloribus est dolores, non voluptates quasi maiores eaque aliquid quos itaque!</p>
                    </div> 
                 </div>
                 <div className="md:pl-10 lg:pl-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 border-2 border-teal-500 rounded-lg p-16">
                    <div className="text-center  ">
                        <p className='education-title'>SECONDARY SCHOOL CERTIFICATE</p>
                        <p className='education-subtitle'>JAN 2009 - MAY 2010 | CREATIVE ALIEN</p>
                    </div>
                    <div className="text-center md:w-9/12 mx-auto">
                        <p className='education-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, hic sunt? Atque sunt officia doloribus est dolores, non voluptates quasi maiores eaque aliquid quos itaque!</p>
                    </div> 
                 </div>
             </div>
               </div>
            </div>
            
        </div>
    );
};

export default Education;
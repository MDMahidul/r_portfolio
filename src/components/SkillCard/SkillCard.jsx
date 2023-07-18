import React from 'react';
import './SkillCard.css'

const SkillCard = () => {
    return (
        <div className='max-w-screen-xl mx-auto md:px-10 lg:px-10 px-10 py-40 grid lg:grid-cols-3 grid-cols-1'>  
            <div className=" px-10 py-14 bg-zinc-900  shadow-lg h-[400px]  skill-card" data-aos='fade-up'>
                 <h5 className="mb-2 text-3xl font-bold tracking-tight text-teal-500  leading-10">UI/UX Design</h5>
                 <p className="font-base lg:text-xl text-white  py-2">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, cupiditate?
                 </p>
            </div>
            <div className=" px-10 py-14  bg-teal-500  shadow-lg h-[440px]  lg:mt-[-20px] skill-card" data-aos='fade-down'>
                 <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-800  leading-10">WEB DEVELOPMENT </h5>
                 <p className="font-base lg:text-xl text-white  py-2">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, cupiditate?
                 </p>
            </div>
            <div className=" px-10 py-14  bg-zinc-900  shadow-lg h-[400px] skill-card " data-aos='fade-up'>
                 <h5 className="mb-2 text-3xl font-bold tracking-tight text-teal-500  leading-10">GRAPHICS DESIGN</h5>
                 <p className="font-base  lg:text-xl text-white  py-2 ">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, cupiditate?
                 </p>
            </div>
        </div>
    );
};

export default SkillCard;
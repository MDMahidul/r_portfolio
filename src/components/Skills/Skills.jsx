import React,{progress} from 'react';
import Progressbar from '../Progressbar/Progressbar';
import SkillCard from '../SkillCard/SkillCard';

const Skills = () => {

    return (
        <div className=' bg-zinc-700'>
            <div className=' max-w-screen-xl  mx-auto'>
                <div className='flex flex-col items-center pt-28 pb-10 px-7'>
                    <h1 className='section-title lg:text-5xl text-4xl'>PROFESSIONAL SKILLS</h1>
                </div>
                <div className='pt-24'>
                  <Progressbar/>
                  <SkillCard/>
                </div>   
            </div>
        </div>
    );
};

export default Skills;
import React,{useState,useEffect} from 'react';
import { Transition } from '@headlessui/react';
import About from '../About/About';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Skills from '../Skills/Skills';
import MyWork from '../MyWork/MyWork';
import Testimonials from '../Testimonials/Testimonials';
import HireMe from '../HireMe/HireMe';
import ContactForm from '../ContactForm/ContactForm';
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const Home = () => {
    const [isPageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
      // Simulating a delay for the page to load
      const timer = setTimeout(() => {
        setPageLoaded(true);
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className='bg-gradient-to-r from-green-500 to-cyan-300'>
      <div className="flex items-center justify-start h-screen max-w-screen-xl mx-auto">
        <Transition
          appear={true}
          show={isPageLoaded}
          enter="transition-transform duration-1000 ease-out"
          enterFrom="translate-y-10"
          enterTo="translate-y-0"
        >
          <div className="flex flex-col justify-center text-white md:pl-10 lg:pl-5 pl-4">
            <h1 className="lg:text-9xl text-7xl leading-tight">Hello!</h1>
            <h2 className='lg:text-7xl text-4xl leading-tight'>I'm <span className='lg:text-7xl font-semibold'>Rubel Ahmed</span></h2>
            <h4 className='text-2xl'>Web & Interface Designer</h4>
          </div>
        </Transition>
      </div>
      <About/>
      <Education/>
      <WorkExperience/>
      <Skills/>
      <MyWork/>
      <Testimonials/>
      <HireMe/>
      <ContactForm/>
      <GoToTopButton/>
    </div>
  );
};

export default Home;

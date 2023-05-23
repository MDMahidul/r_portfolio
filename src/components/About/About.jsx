import React,{useState,useEffect} from 'react';
import Propic from '/pro-pic.jpg';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faMotorcycle,faPlane,faPersonHiking,faCode,faFilm,faMusic } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

const About = () => {
   /*  const [isPageLoaded, setPageLoaded] = useState(false); */
   

    useEffect(() => {
        AOS.init({
             easing: 'ease-in-sine',
            duration: 1000,
            anchorPlacement: 'top-bottom' ,
            once: true,
        });
    }, []);

    return (
        <div className='bg-zinc-800 pb-10'>
           <div className=' max-w-screen-xl  mx-auto'>
                <div className="about-thum-area">
                    <div className="grid lg:grid-cols-2 pt-44  md:pl-10 lg:pl-0 pl-6">
                        <div data-aos='fade-right'>
                            <div className='about-img' >
                                <img className='lg:h-96 lg:w-[365px] h-[365px]' src={Propic} alt="" />
                            </div>
                            <div className='resume-btn lg:ml-20 '><a className='hover:scale-105 transition-transform' href="#"><FontAwesomeIcon className='text-white mr-2'  icon={faDownload} />Download Resume</a></div>
                        </div>
                        <div  className='about-details mt-20 lg:mt-[-65px]' data-aos='fade-left'>
                            <h2 className='section-title mb-4 text-5xl'>ABOUT ME</h2>
                            <p className='text-white text-base mb-4 w-9/12'>Hello! I'm Oliver Queen. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</p>
                            <h6 className='about-subtitle'>NAME: <span className='about-subtitle-span'>Bruce Wayne</span></h6>
                            <h6 className='about-subtitle'>DATE OF BIRTH: <span className='about-subtitle-span'>14 February 1995</span></h6>
                            <h6 className='about-subtitle'>NATIONALITY: <span className='about-subtitle-span'>Bangladeshi</span></h6>
                            <h6 className='about-subtitle'>ADDRESS: <span className='about-subtitle-span'>Khilkhet, Dhaka, Bangladesh</span></h6>
                            <h6 className='about-subtitle'>PHONE: <span className='about-subtitle-span'>0124565565</span></h6>
                            <h6 className='about-subtitle'>EMAIL: <span className='about-subtitle-span'>something@yo.com</span></h6>
                        </div>
                    </div>
                    <div className='lg:w-11/12 mx-auto pl-6 lg:pl-14 mt-20 lg:mt-28 pb-24'>
                        <h4 className='section-title text-4xl mb-14'>MY INTERESTS</h4>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14 ml-7'>
                            <div className='transition-all duration-300 relative'>
                                <div data-aos='zoom-in' data-aos-duration='500' className='interest-item '>
                                    <FontAwesomeIcon className='' icon={faMotorcycle} />
                                </div> 
                                <span className='hidden absolute mt-3'>Bike Riding</span>
                            </div>
                            <div className='transition-all duration-300 relative '>
                                <div data-aos='zoom-in' data-aos-duration='500' className='interest-item '>
                                <FontAwesomeIcon icon={faPlane} />
                                </div> 
                                <span className='hidden absolute mt-3 ml-2'>Traveling</span>
                            </div>
                            <div className='transition-all duration-300 relative '>
                                <div data-aos='zoom-in' data-aos-duration='500' className='interest-item '>
                                <FontAwesomeIcon icon={faPersonHiking} />
                                </div> 
                                <span className='hidden absolute mt-3 ml-4'>Hiking</span>
                            </div>
                            <div className='transition-all duration-300 relative '>
                                <div data-aos='zoom-in' data-aos-duration='500' className='interest-item '>
                                <FontAwesomeIcon icon={faCode} />
                                </div> 
                                <span className='hidden absolute mt-3 ml-4'>Coding</span>
                            </div>
                            <div className='transition-all duration-300 relative '>
                                <div data-aos='zoom-in' data-aos-duration='500' className='interest-item '>
                                <FontAwesomeIcon icon={faFilm} />
                                </div> 
                                <span className='hidden absolute mt-3 ml-4'>Movie</span>
                            </div>
                            <div className='transition-all duration-300 relative '>
                                <div data-aos='zoom-in' data-aos-duration='500' className='interest-item '>
                                <FontAwesomeIcon icon={faMusic} />
                                </div> 
                                <span className='hidden absolute mt-3 ml-5'>Music</span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default About;
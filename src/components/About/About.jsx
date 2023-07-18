import React,{useState,useEffect} from 'react';
import Propic from '/pro-pic.jpg';
import Ruebl  from '/Rubel.jpg'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faMotorcycle,faPlane,faPersonHiking,faCode,faFilm,faMusic } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { Link } from 'react-router-dom';

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
                    <div className="grid lg:grid-cols-2 pt-44  md:pl-10 lg:pl-10 px-4">
                        <div data-aos='fade-right'>
                            <div className='about-img' >
                                <img className='h-96' src={Propic} alt="" /> 
                            </div>
                            <div className='resume-btn lg:ml-20 '><Link target='_blank' className='hover:scale-105 transition-transform' to="https://drive.google.com/file/d/1UZ9ES-6I8cJWXsq-_KoJ42FALLK7kGV8/view?usp=sharing"><FontAwesomeIcon className='text-white mr-2'  icon={faDownload} />Download Resume</Link></div>
                        </div>
                        <div  className='about-details mt-20 lg:mt-[-65px]' data-aos='fade-left'>
                            <h2 className='section-title mb-4 lg:text-5xl text-4xl'>ABOUT ME</h2>
                            <p className='text-white text-base mb-4 w-9/12'>Hello! I'm Rubel  Ahmed. Web Developer with over 5 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Wordpress. Strong background in management and leadership.</p>
                            <h6 className='about-subtitle'>NAME: <span className='about-subtitle-span'>Rubel Ahmed</span></h6>
                            <h6 className='about-subtitle'>NATIONALITY: <span className='about-subtitle-span'>Bangladeshi</span></h6>
                            <h6 className='about-subtitle'>ADDRESS: <span className='about-subtitle-span'>Khilkhet, Dhaka, Bangladesh</span></h6>
                            <h6 className='about-subtitle'>PHONE: <span className='about-subtitle-span'><a href="tel:+88 01309-081617">+88 01309-081617</a></span></h6>
                            <h6 className='about-subtitle'>EMAIL: <span className='about-subtitle-span'><a href="mailto:rubelahmed.rhr@gmail.com">rubelahmed.rhr@gmail.com</a></span></h6>
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
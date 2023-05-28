import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus,faLink } from '@fortawesome/free-solid-svg-icons';
import './MyWork.css';

const MyWork = () => {
    return (
        <div className=' bg-zinc-700 '>
            <div className='flex flex-col px-7 lg:items-center pt-10 pb-16'>
                <h1 className='section-title lg:text-5xl text-4xl'>SOME OF MY WORKS</h1>
            </div>
            <div className='bg-emerald-500'>
                <div className='max-w-screen-xl lg:px-7 px-10  mx-auto py-[80px] mt-10'>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="portfolio-single">
                      <div className="portfolio-thum">
                        <img className='' src="https://comeout.netlify.app/demo/abstract/img/portfolio/port_item-2.jpg" alt="" />
                      </div>
                      <div className="portfolio-hover text-center">
                        <div className="port-btn-hvr">
                          <a href="#">
                            <FontAwesomeIcon icon={faLink}/>
                          </a>
                        </div>
                        <div className="port-meta">
                          <h4 >Branding Design</h4>
                          <p>LOGO DESIGN</p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-single">
                      <div className="portfolio-thum">
                        <img className='' src="https://comeout.netlify.app/demo/abstract/img/portfolio/port_item-1.jpg" alt="" />
                      </div>
                      <div className="portfolio-hover text-center">
                        <div className="port-btn-hvr">
                          <a href="#">
                            <FontAwesomeIcon icon={faLink}/>
                          </a>
                        </div>
                        <div className="port-meta">
                          <h4 >Branding Design</h4>
                          <p>LOGO DESIGN</p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-single">
                      <div className="portfolio-thum">
                        <img className='' src="https://comeout.netlify.app/demo/abstract/img/portfolio/port_item-3.jpg" alt="" />
                      </div>
                      <div className="portfolio-hover text-center">
                        <div className="port-btn-hvr">
                          <a href="#">
                            <FontAwesomeIcon icon={faLink}/>
                          </a>
                        </div>
                        <div className="port-meta">
                          <h4 >Branding Design</h4>
                          <p>LOGO DESIGN</p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-single">
                      <div className="portfolio-thum">
                        <img className='' src="https://comeout.netlify.app/demo/abstract/img/portfolio/port_item-4.jpg" alt="" />
                      </div>
                      <div className="portfolio-hover text-center">
                        <div className="port-btn-hvr">
                          <a href="#">
                            <FontAwesomeIcon icon={faLink}/>
                          </a>
                        </div>
                        <div className="port-meta">
                          <h4 >Branding Design</h4>
                          <p>LOGO DESIGN</p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-single">
                      <div className="portfolio-thum">
                        <img className='' src="https://comeout.netlify.app/demo/abstract/img/portfolio/port_item-5.jpg" alt="" />
                      </div>
                      <div className="portfolio-hover text-center">
                        <div className="port-btn-hvr">
                          <a href="#">
                            <FontAwesomeIcon icon={faLink}/>
                          </a>
                        </div>
                        <div className="port-meta">
                          <h4 >Branding Design</h4>
                          <p>LOGO DESIGN</p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-single">
                      <div className="portfolio-thum">
                        <img className='' src="https://comeout.netlify.app/demo/abstract/img/portfolio/port_item-6.jpg" alt="" />
                      </div>
                      <div className="portfolio-hover text-center">
                        <div className="port-btn-hvr">
                          <a href="#">
                            <FontAwesomeIcon icon={faLink}/>
                          </a>
                        </div>
                        <div className="port-meta">
                          <h4 >Branding Design</h4>
                          <p>LOGO DESIGN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center pt-16 my-5'>
                    <button className='border-2 border-zinc-900 hover:border-zinc-900 hover:text-zinc-900 hover:bg-transparent text-teal-500 bg-zinc-900 px-14 py-4 font-semibold text-xl transition-all'>LOAD MORE</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default MyWork;
import React from 'react';

const Home = () => {
    return (
        <div className=' bg-gradient-to-r from-green-500 to-cyan-300'>
            <div className="flex items-center justify-start h-screen max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center text-white">
                <h1 className="text-9xl leading-tight">Hello!</h1>
                <h2 className='text-7xl leading-tight'>I'm <span className='text-7xl font-semibold'>Bruce Wayne</span></h2>
                <h4 className='text-2xl'>Web & Interface Designer</h4>
            </div>
            </div>
        </div>
    );
};

export default Home;
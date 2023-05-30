import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    const {id,name,image,comment} =  testimonial;
    console.log(testimonial)

    return (
        <div className="text-center px-5 lg:px-0">
            <div className='w-20 mx-auto'>
                <img className='h-20 w-20 rounded-full' src={image} alt="" />
            </div>
            <h4 className='text-teal-500 font-semibold text-2xl py-4'>{name}</h4>
            <p className='text-white italic  font-normal text-lg comment'>{comment}</p>
        </div>
    );
};

export default Testimonial;
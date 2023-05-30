import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonial.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className='bg-zinc-900 pb-20'>
      <div className='flex flex-col px-7 lg:items-center pt-28 pb-20'>
        <h1 className='section-title lg:text-5xl text-4xl'>CLIENT TESTIMONIALS</h1>
      </div>
      <div className='max-w-lg mx-auto'>
        {testimonials.length > 0 ? (
          <OwlCarousel
            className='owl-theme owl-carousel'
            items={1}
            loop={true}
            dots={false}
            nav={false}
            autoplay={true}
            autoplayTimeout={4000}
            autoplayHoverPause={true}
          >
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </OwlCarousel>
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
import React,{useState} from 'react';
import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };
    return (
        <div className='bg-zinc-900 py-10'>
            <div className='flex flex-col px-7 lg:items-center mt-20 pb-24'>
                <h1 className='section-title lg:text-5xl text-4xl'>CONTACT ME</h1>
            </div>
            <div className='max-w-screen-xl  mx-auto'>
            <form onSubmit={handleSubmit} className='pb-10 px-7'>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="contact-input-field peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="contact-label">Name*</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" id="floating_email" className="contact-input-field peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="contact-label">Email address*</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <textarea
                    name="floating_message"
                    id="floating_message"
                    className="contact-input-field peer"
                    placeholder=" "
                    rows="4"
                    required
                ></textarea>
                <label
                    htmlFor="floating_message"
                    className="contact-label"
                >
                    Message
                </label>
                </div>
                <div className='py-8 text-center'>
                    <button className='border-2 border-teal-500 hover:border-teal-500 hover:text-zinc-900 hover:bg-teal-500 text-teal-500 bg-zinc-900 px-14 py-4 font-semibold text-xl transition-all'>SEND MESSAGE</button>
                </div>
            </form>

            </div>
        </div>
    );
};

export default ContactForm;



   
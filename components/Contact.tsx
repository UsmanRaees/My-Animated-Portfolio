import React from 'react'
import { FiMail } from "react-icons/fi";
import { BsTelephonePlus } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-gray-700 text-[18px] pt-2 font-bold' data-aos="zoom-in-up">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <FiMail className='text-red-700' size={30} /> m.usmanraees21@gamil.com
                </div>
                <div className='flex gap-3 items-center'  data-aos="zoom-in-up">
                    <BsTelephonePlus className='text-sky-950' size={30} /> (+92) 3350386812
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' id='email' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea className='bg-transparent border border-accent' id='msg' rows={8}></textarea>
                </div>
                <button className='bg-accent p-2 px-6 rounded-md' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact

import React from 'react'
import Footer_bg from '../assets/asset/Footer_bg.png'
import logo from '../assets/asset/logo.svg'
import insta from '../assets/asset/insta.png'
import twitter from '../assets/asset/twitter.png'
import fb from '../assets/asset/fb.png'
import time from '../assets/asset/time.png'
import calender from '../assets/asset/calender.png'
import mail from '../assets/asset/mail.png'
import phone from '../assets/asset/phone.png'

const Footer = () => {
  return (
    <div className='bg-zinc-900'>

    <div className='h-[351px]  bg-right' style={{backgroundImage: `url(${Footer_bg})`}}>
        <div className='flex p-14 justify-around'>
        <div > 
        <div className="flex  items-center">
            <img src={logo} className="md:w-[63px]" />
            <h1 className="sm:ml-3  text-white font-bold text-center md:text-[50px] h-auto">
              CARCRUIZE
            </h1>
        </div>
        <div>
            <h1 className='max-w-[375px] text-white'>Shri Ram Palace, commerce house, Shastri Nagar, Bank More, Dhanbad, Jharkhand 826001</h1>
        </div>
        <div className='flex space-x-6'> 
            <img src={insta}/>
            <img src={twitter}/>
            <img src={fb}/>
        </div>
        <div className='space-y-3 pt-8'>

        <div className='flex-col'>
        <a className='text-pila cursor-pointer'>Terms & Conditions</a>
        </div>
        <div>
        <a className='text-pila cursor-pointer'>Privacy Policy</a>
        </div>
        
        </div>

        </div>


        <div className='space-y-7'> 
            <div className='flex'>
                <img src={mail}/>
                <h1 className='text-[16px] text-white px-5'>Email</h1>
            </div>
            <div className='flex'>
                <img src={phone}/>
                <h1 className='text-[16px] text-white px-5'>Phone Number</h1>
            </div>
            <div className='flex'>
                <img src={calender}/>
                <h1 className='text-[16px] text-white px-5'>Working Days</h1>
            </div>
            <div className='flex'>
                <img src={time}/>
                <h1 className='text-[16px] text-white px-5'>Working Hour</h1>
            </div>
        </div>


        <div className='space-y-7'> 
            <div className='flex'>
              
                <h1 className='text-[16px] text-white px-5'>info@gmail.com</h1>
            </div>
            <div className='flex'>
                <h1 className='text-[16px] text-white px-5'>9709709700</h1>
            </div>
            <div className='flex'>
                <h1 className='text-[16px] text-white px-5'>Monday - Sunday</h1>
            </div>
            <div className='flex'>
                <h1 className='text-[16px] text-white px-5'>7:00AM - 9:00PM (IST)</h1>
            </div>
        </div>
    </div>
    </div>
    </div>

  )
}

export default Footer
import React, { useState } from 'react';
import burudLogo from "../Assets/burudBandhan_logo.jpeg";
import { MdOutlineEmail, MdCall, MdCopyright } from "react-icons/md";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter,  } from "react-icons/fa";

const iniQuickLinks = [
    {title: "Home", url: "/"},
    {title: "About us", url: "/about"},
    {title: "Contact us", url: "/contact"},
    {title: "Success Stories", url: "/success_stories"},
    {title: "Success Videos", url:"/success_videos"}
]

const iniLegalLinks = [
    {title:"Rules", url: "/"},
    {title:"FAQ", url: "/"},
    {title:"Terms & Conditions", url: "/"},
    {title:"Privacy Policy", url: "/"},
   
]

const Footer = () => {
    const [quickLinks, setQuickLinks] = useState(iniQuickLinks);
    const [legalLinks, setLegalLinks] = useState(iniLegalLinks);
  return (
    <footer className='  bg-sky-950 text-gray-200  pt-[80px] pb-[40px] '>
        <div className=' border-gray-50 w-[80%] m-auto flex justify-between items-center'>
            {/* logo and text */}
            <div className='flex flex-col gap-[20px]'>
                <img className='w-[120px] h-[120px] m-auto rounded-full' src={burudLogo} alt='logo_image' />
                <p className='font-bold text-[20px]'>अखिल महाराष्ट्र बुरूड समाज वधु-वर सुचक समिती</p>
            </div>

            {/* links section */}
            <div className='w-[50%] flex justify-between'>
                <div className='text-left'>
                    <h5 className='text-[20px] font-bold mb-[14px]'>Quick Links</h5>
                    <ul className='flex flex-col gap-[8px]'>
                        {
                            quickLinks.map((item, i) =>(
                                <li key={i}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='text-left'>
                    <h5 className='text-[20px] font-bold mb-[14px]'>Legal</h5>
                    <ul className='flex flex-col gap-[8px]'>
                        {
                            legalLinks.map((item, i) =>(
                                <li key={i}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='text-left'>
                    <h5 className='text-[20px] font-bold mb-[14px]'>Help</h5>
                    <div className=' flex flex-col gap-[8px]'>
                        <div className='flex justify-start items-center gap-[15px]'>
                            <MdCall />
                            <p>9999999999</p>
                        </div>
                        <div className='flex justify-start items-center gap-[15px]'>
                            <MdOutlineEmail />
                            <p>burudsamaj@gmail.com</p>
                        </div>

                        <div className='p-[5px] flex justify-start items-center gap-[25px]'>
                            <div className='cursor-pointer border rounded-full p-[6px]'>
                                <FaFacebookF className="text-[20px]" />
                            </div>
                            <div className='cursor-pointer border rounded-full p-[6px]'>
                                <FaTwitter className="text-[20px]" />
                            </div>
                            <div className='cursor-pointer border rounded-full p-[6px]'>
                                <FaLinkedinIn className="text-[20px]" />
                            </div>
                            <div className='cursor-pointer border rounded-full p-[6px]'>
                                <FaGooglePlusG className="text-[20px]" />
                            </div>
                        </div>
                        
                    </div>

                   
                
                </div>
            </div>

           
        </div>
        
        <div className='border-t border-gray-600 mt-[50px] '>
            <div className='flex gap-[5px] items-center  justify-center p-[20px]'>
                <MdCopyright /> 
                <p>
                    Copyright BurudBandhan. Designed by @Increditex Software Solutions Pvt. Ltd. All right reserved.
                </p>
            </div>
        </div>

        
    </footer>
  )
}

export default Footer
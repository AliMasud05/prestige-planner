import Image from 'next/image'
import React from 'react'
import Button from "@/components/Button/Button";
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import Link from 'next/link';


const EventCard = ( {item}) => {
   
    let data = {}; 
    
    if (item) {
        const { id, name, category } = item;
        data = { id, name, category }; // Assign the destructured properties inside the 'if' block
    }
    return (
        <div className='flex justify-center font-sans'>
            <div className='border w-[210px] h-[315px] bg-white shadow-lg relative rounded'>
                <div className='w-[36px] h-[36px] bg-[#FF9209] absolute left-[8px] top-[8px]'>
                    <h1 className='font-bold text-white text-center text-[12px]'>26 JUNE</h1>
                </div>
                <Image

                    width={500}
                    height={500}
                    sizes="100vw"
                    style={{ width: '208px', height: '135px', borderRadius: '50%,', }}
                    src="https://i.ibb.co/MCJNtXx/eric-ward-u-D0-W-sw-VGg-E-unsplash.jpg"
                    alt='' />
                <hr className='bg-[#FF9209] h-14 w-1 ml-[3px] mt-2 absolute ' />
                <div className='my-2 ml-3'>
                    <h1 className='font-semibold text-[13px] text-left ml-2 font-serif'>${data.name}</h1>
                    <p className='text-[#FF9209] text-[11px] ml-2 '>Ticket from $<span>23</span></p>
                    <div className='my-2'>
                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><BiTimeFive className='text-white ' /></span> Start <span className='ml-2'>20.00pm </span> </h1>
                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><CiLocationOn className='text-white ' /></span>  Manhattan , New York </h1>
                    </div>

                </div>

                <Link href='/' className=' flex justify-center mt-4 '>
                    <button className='text-[12px] shadow-md border border-[#d5d4d3] rounded-xl  py-[6px] px-[10px]  font-serif font-semibold hover:bg-[#FF9209] hover:text-white'>TICKET & DETAILS</button>
                </Link>         
                   </div>
        </div>
    )
}

export default EventCard
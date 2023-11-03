'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';

const ServiceCard = ({ product}) => {
    return (
        <div className='flex  justify-center font-sans mx-2'>

            <div className='flex lg:flex-row md:flex-row flex-col border   bg-white shadow-lg relative rounded'>
                <div className='w-1/2 '>

                <div className='w-[36px] h-[36px] bg-[#FF9209] absolute left-[0px] top-[0px]'>
                    <h1 className='font-bold text-white text-center text-[12px]'>26 JUNE</h1>
                </div>
                <Image

                    width={500}
                    height={500}
                    sizes="100vw"
                    style={{ width: '208px', height: '135px', borderRadius: '50%,', }}
                    src="https://i.ibb.co/MCJNtXx/eric-ward-u-D0-W-sw-VGg-E-unsplash.jpg"
                    alt='' />
                </div>
                <div className='my-2 mr-5 pr-4 relative'>
                    <hr className='bg-[#FF9209] h-10 w-1   absolute left-[3px] top-[2px] ' />
                    <h1 className='font-semibold text-[13px] text-left ml-2 font-serif'>Barcelona Food Event</h1>
                    <p className='text-[#FF9209] text-[11px] ml-2 '>Ticket from $<span>23</span></p>
                    <p className='my-2 mx-1 text-[13px ]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aut natus praesentium ducimus, fugit eaque facilis possimus cum illum saepe.
                    </p>
                    <div className='my-2'>
                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><BiTimeFive className='text-white ' /></span> Start <span className='ml-2'>20.00pm </span> </h1>
                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><CiLocationOn className='text-white ' /></span>  Manhattan , New York </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='flex items-center '> <BiTimeFive className='mr-1 text-xl text-[#FF9209]'/> Speaker</h1>
                            <h1 className='mr-3 text-[15px] font-medium'>John Mathaw</h1>
                        </div>
                        <div>
                            <h1 className='flex items-center '> <BiTimeFive className='mr-1 text-xl text-[#FF9209]'/> Max Seat</h1>
                            <h1 className='mr-3'>2220 Seat</h1>
                        </div>
                        <Link href='/' className=' flex justify-center mt-4 '>
                            <button className='text-[12px] shadow-md border border-[#d5d4d3] rounded-xl  py-[6px] px-[10px]  font-serif font-semibold hover:bg-[#FF9209] hover:text-white'>TICKET & DETAILS</button>
                        </Link> 
                    </div>

                </div>

               
            </div>
        </div>
    )
}
export default ServiceCard
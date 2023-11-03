'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServiceCard from '@/components/Shared/ServiceCard';
import EventCard from '@/components/Shared/EventCard';

const Feature = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const products = [
        { id: 1, name: 'Product 1', category: 'Category 1' },
        { id: 2, name: 'Product 2', category: 'Category 2' },
        { id: 3, name: 'Product 3', category: 'Category 1' },
        
    ];
    const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
  
    return (
        <div className=' py-4'>
            
            <ul className='flex items-center justify-center font-serif font-normal text-white'>
                <h1 className='mr-3 text-2xl text-black font-sans'>
                    PRESTIGE <br /> <span>Event</span> Planning
                </h1>
                <li className='mx-2'>
                    <button
                        className='py-1 px-3 bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                        onClick={() => setSelectedCategory('All')}
                    >
                        All
                    </button>
                </li>
                <li className='mx-2'>
                    <button
                        className='py-1 px-3  bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                        onClick={() => setSelectedCategory('Category 1')}
                    >
                        Music Event
                    </button>
                </li>
                <li className='mx-2'>
                    <button
                        className='py-1 px-3 bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                        onClick={() => setSelectedCategory('Category 2')}
                    >
                        Conference
                    </button>
                </li>
            </ul>
            <ul className='grid grid-flow-col auto-cols-max gap-1 place-content-center  h-auto my-3'>  {filteredProducts.map((item) => (
                <EventCard key={item.id} item={item} />
            ))}
            </ul>
          
        </div>
    );
};

export default Feature
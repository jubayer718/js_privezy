'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; 
// const items = Array.from({ length: 10 });
const items = [
  { title: 'quality product', image: '/grill_icon.png' },
  { title: 'shipping across India', image: '/grill_icon.png' },
  { title: 'quality product', image: '/grill_icon.png' },
  { title: 'shipping across India', image: '/grill_icon.png' },
  { title: 'quality product', image: '/grill_icon.png' },
];

const Moving = () => {

  return (
    <div className='my-16'>
      <div className='bg-[#D9ECFF] py-7 overflow-hidden -rotate-4 min-w-screen relative -left-1'>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className='flex w-max gap-10'
        >
          
          {[...items, ...items].map((item, index) => (
            <div key={index} className='flex items-center gap-7'>
              <p className='whitespace-nowrap text-lg font-semibold'>{ item.title}</p>
              <Image
                src={item.image}
                alt="grill icon"
                width={76}
                height={40}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Moving;

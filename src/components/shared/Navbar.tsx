/* eslint-disable @next/next/no-img-element */

import Container from './Container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RiShoppingBasketLine } from "react-icons/ri";
import Image from 'next/image';

const Navbar = () => {
  return (
    <Container > 
      <nav className='flex items-center justify-between relative '>
        
        <ul className='flex items-center gap-12'>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Blogs</Link>
          <Link href={'/'}>Content</Link>
        </ul>

        <div className='flex items-center justify-center'>
          <Image className='absolute top-0 z-50 p-2 rounded-full bg-gray-200 '  width={114} height={128} src="/frame_1.png" alt='this is nav img'/>
        </div>

        <div className='flex items-center gap-12'>
        <Button className={cn('')} variant={'ghost'}>Login <User/> </Button>  
        <Button className={cn('')} variant={'ghost'}><Search/> </Button>  
        <Button className={cn('relative')} variant={'ghost'}><RiShoppingBasketLine/><span className='absolute right-1 text-xs  p-0.5 px-1 rounded-full top-0 bg-black text-white '>0</span></Button>  
    </div>

     </nav>
    </Container>
   
  );
};

export default Navbar;
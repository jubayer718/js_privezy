
import Container from './Container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RiShoppingBasketLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <Container > 
      <nav className='flex items-center justify-between'>
        
        <ul className='flex items-center gap-12'>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Blogs</Link>
          <Link href={'/'}>Content</Link>
        </ul>

        <div className='flex items-center gap-12'>
        <Button className={cn('')} variant={'ghost'}>Login <User/> </Button>  
        <Button className={cn('')} variant={'ghost'}><Search/> </Button>  
        <Button className={cn('')} variant={'ghost'}><RiShoppingBasketLine/> </Button>  
    </div>

     </nav>
    </Container>
   
  );
};

export default Navbar;
import React from 'react';
import Container from './Container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Btn from '../shared/Button'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className=' bg-gradient-to-br from-[#000509ee] to-[#033a75ca] w-ful pt-24 rounded-3xl'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
          <div className=' col-span-2'>

            {/* CARD */}
            <Card className="w-full h-full  bg-transparent border-none shadow-none">
              <CardHeader>
                <CardTitle className='font-normal text-3xl text-white mb-12 -mt-6'>Join Our JF Products</CardTitle>
                <CardDescription>
                  We’ll tell you about store updates and discounts
                </CardDescription>

              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">

                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className='outline-none border-none placeholder:text-white bg-[#ffffff27] p-5 rounded-3xl'
                      />
                      <div className='flex items-center gap-4 text-white'>
                        <span>
                          <input type="checkbox" />
                        </span>
                        <CardDescription>
                          Yes, subscribe me to your newsletter.
                        </CardDescription>

                      </div>
                    </div>

                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">

                <Button variant="outline" className="w-full p-5 rounded-full">
                  Join Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className='md:col-span-1 lg:ml-24'>
            <h2 className='text-3xl font-normal text-white mb-10'>Information</h2>
            <ul className='flex flex-col gap-5 text-white'>
              <li>Home</li>
              <li>Shop</li>
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>


          <div className='md:col-span-1 lg:ml-24'>
            <h2 className='text-3xl font-normal text-white mb-10'>Helpful</h2>
            <ul className='flex flex-col gap-5 text-white'>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li> Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>My Account</li>
            </ul>
          </div>

        </div>

        <div className='mt-24 flex items-center justify-around'>
          <div className='flex flex-1 items-center gap-12'>
            <Image
              width={130}
              height={150}
              src={'/frame_1.png'}
              alt=''
              className='bg-white p-3 rounded-full'
            />
            <p className='text-white flex flex-col'>
            <span className='font-semibold'>  Our Branches</span>
              Coimbatore, Chennai, Hyderabad, Goa, Kochi
            </p>
          </div>
       <Btn label='Contact us'/>

        </div>
      </Container>
      </div>
      <div className='flex flex-col md:flex-row justify-around items-center my-10'>
        <p className='uppercase'>Copyright © 2025 JF Products. All rights reserved</p>
        {/* social icon */}
        <div className='flex gap-3'>
          <FaFacebook className='p-2 bg-gray-100 rounded-full' size={30}/>
          <FaInstagram  className='p-2 bg-gray-100 rounded-full' size={30}/>
          <FaYoutube  className='p-2 bg-gray-100 rounded-full' size={30}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
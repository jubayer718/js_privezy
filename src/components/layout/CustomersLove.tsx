import React from 'react';
import Container from '../shared/Container';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Button from '../shared/Button';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

const CustomersLove = () => {
  return (
    <Container>
       <h2 className='text-center mb-10 text-[42px] font-medium'>Why Customers Love Us?</h2>
        <div className="flex items-center justify-center py-6">
        <Carousel className="w-full ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card   className="h-[600px] flex items-center justify-center shadow-md rounded-xl">
                    <CardContent className="flex flex-row-reverse w-full h-full px-6 py-4">
                      {/* Image Section */}
                      <div className=" w-1/3 relative rounded-xl  bg-gray-200  flex items-center justify-center ">
                      
                          
                          <Image
                            src="/man.png"
                            alt="banner image"
                            width={280}
                          height={6}
                          
                            className='rounded-xl  '
                          />
                  
                   
                      </div>

                      {/* Content Section */}
                      <div                     
                        className="w-2/3 flex flex-col justify-center px-10 space-y-4 ">
                      
                        <Image width={80} height={80} src="/cote_img.png" alt='' />
                        <p className='text-2xl font-normal'>I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product</p>

                        <div style={{ backgroundImage: "url('/img_bg_2.png')" }} className='h-32 rounded-3xl'> <p className='text-3xl font-semibold mt-10'>- Samuel Varughese</p>
                        
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                </div>
                
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious  />
          <CarouselNext  />
        </Carousel>
      </div>
   </Container>
  );
};

export default CustomersLove;
import React from 'react';
import Container from '../shared/Container';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

import Image from 'next/image';
import Button from '../shared/Button';
import { cn } from '@/lib/utils';

const Banner = () => {
  return (
    <Container>
      <div className="flex items-center justify-center py-6">
        <Carousel className="w-full ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card   style={{backgroundColor:'rgb(242, 244, 246)'}} className="h-[600px] flex items-center justify-center shadow-md rounded-xl">
                    <CardContent className="flex w-full h-full px-6 py-4">
                      {/* Image Section */}
                      <div className="w-1/2 relative rounded-xl overflow-hidden bg-[url(/img_bg.png)] p-12 flex items-center justify-center ">
                        
                          <Image
                            src="/image_1.png"
                            alt="banner image"
                            width={530}
                            height={544}
                            className='rounded-xl'
                          />
                   
                      </div>

                      {/* Content Section */}
                      <div
                      
                        className="w-1/2 flex flex-col justify-center px-10 space-y-4 ">
                        <h1 className="text-6xl font-medium word-black">
                          JF Privezy Grass Wall
                        </h1>
                        <p className="text-2xl word-black">
                          The Perfect Blend Of Greenery
                        </p>
                        <Button
                          className='w-40'
                          label='Shop Now'
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={cn('button-bg')} />
          <CarouselNext  className={cn('button-bg')} />
        </Carousel>
      </div>
    </Container>
  );
};

export default Banner;

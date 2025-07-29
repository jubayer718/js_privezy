import Container from '../shared/Container';
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import Button from '../shared/Button';

const cardInfo = [
  {
    image: '/card_img_5.png',
    title: 'Antiqo Fence',
    price: '₹10,024.00 – ₹14,984.82'
  },
  {
    image: '/card_img_6.png',
    title: 'JF Australian Trellis',
    price: '₹6,962.00'
  },
  {
    image: '/card_img_7.png',
    title: 'GI Poultry Mesh',
    price: '₹1,260.00 – ₹10,750.00'
  },
  {
    image: '/card_img_8.png',
    title: 'JF Polyhex Mesh',
    price: '₹4,050.00 – ₹10,770.00'
  },
  {
    image: '/card_img_5.png',
    title: 'JF Privezy Grass Wall',
    price: '₹1,646.10 – ₹18,284.10'
  },
]

console.log(cardInfo.map(card => card.image))
const Landscape = () => {
  return (
    <Container className='my-18'>
      <h2 className='font-medium text-4xl mb-10'>Landscape Products</h2>
      <div className='flex items-center justify-center'>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 ">
            {cardInfo.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-3">
                  <Card style={{ backgroundColor: "rgb(242, 244, 246)" }} className="h-full border-none shadow-md hover:shadow-xl transition-shadow rounded-2xl py-2">
                    <CardContent className="flex flex-col items-center justify-between h-full px-2">
                      {/* Image */}
                      <div className="w-full h-[200px] overflow-hidden rounded-xl">
                        <Image
                          src={card.image}
                          alt={`card ${index}`}
                          width={300}
                          height={200}
                          className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className='w-full'>
                        {/* Title */}
                        <h3 className="mt-4 text-lg font-semibold text-left word-black">
                          {card.title}
                        </h3>

                        {/* Price */}
                        <p className="mt-2 text-left">{card.price}</p>

                        {/* action */}
                        <Button label='Shop Now' className='mt-5' />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
};

export default Landscape;
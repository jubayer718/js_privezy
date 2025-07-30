import React from 'react';
import Container from '../shared/Container';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import Image from 'next/image';
import Button from '../shared/Button';

const WhyUs = () => {
  return (
    <Container className='my-24'>
      <div>
        <h2 className='text-center font-medium text-[42px] mb-8'>Why Us</h2>
        <p className='w-[52%] mx-auto  text-center mb-28'>We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>

        <div className='grid grid-cols-3 gap-10'>
           {/* card-1 */}
        <div className='flex flex-grow'>
          <Card className="transition-all group duration-500 transform hover:-translate-y-10 hover:bg-gradient-to-br hover:to-[#002B55]  bg-gradient-to-bl from-[#4388cd]  to-[#ffffff] rounded-xl shadow-md">
            <CardContent>
              <Image
                width={50}
                height={70}
                src='/card_img_9.png'
                  alt='card img'
                  className='mb-8'
              />
              <CardTitle className='mb-5 text-2xl font-medium group-hover:text-white'>
                Unmatched Durability with Corrosion-Free Technology
              </CardTitle>
              
              <CardDescription className='group-hover:text-white'>
                Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.

              </CardDescription>
            </CardContent>
          </Card>
        </div>
           {/* card-2 */}
        <div className='flex flex-grow'>
          <Card className="transition-all group duration-500 transform hover:-translate-y-10 hover:bg-gradient-to-br hover:to-[#002B55]  bg-gradient-to-bl from-[#4388cd]  to-[#ffffff] rounded-xl shadow-md"
>
            <CardContent>
              <Image
                width={50}
                height={70}
                src='/card_img_10.png'
                  alt='card img'
                  className='mb-8'
              />
              <CardTitle className='mb-5 text-2xl font-medium group-hover:text-white'>
              Customer-Centric Approach
              </CardTitle>
              
              <CardDescription className='group-hover:text-white'>
                At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.

              </CardDescription>
            </CardContent>
          </Card>
        </div>
           {/* card-3 */}
        <div className=' flex flex-grow'>
          <Card className="transition-all group duration-500 transform hover:-translate-y-10 hover:bg-gradient-to-br hover:to-[#002B55]  bg-gradient-to-bl from-[#4388cd]  to-[#ffffff] rounded-xl shadow-md">
            <CardContent>
              <Image
                width={50}
                height={70}
                src='/card_img_11.png'
                  alt='card img'
                  className='mb-8'
              />
              <CardTitle className='mb-5 text-2xl font-medium group-hover:text-white'>
                Innovative and Diverse Product Range
              </CardTitle>
              
              <CardDescription className='group-hover:text-white'>
             We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        </div>
        
        <div className='flex items-center justify-center mt-8'><Button className='' label='Contact Us'/></div>
    </div>
    </Container>
  );
};

export default WhyUs;
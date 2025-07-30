import React from 'react';
import Container from '../shared/Container';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea';
import Button from '../shared/Button';
import Image from 'next/image';


const OurBranch = () => {
  return (
    <Container>
      <div className='w-full p border-2 rounded-3xl relative'>
        <Button className='uppercase absolute -top-8 left-1/2 transform -translate-x-1/2 ' label='Our Branches'/>
        <div className='flex items-center justify-center gap-2 mb-5 mt-7'>
          {/* icon-1 */}
            <div className="flex flex-col items-center justify-center hover:bg-[url('/location_img_bg.png')] p-5 rounded-3xl bg-center bg-no-repeat">
               <Image
              width={ 116}
              height={104}
              src={'/location_icon_1.png' }
              alt='location image' />
            <p className='font-normal text-sm uppercase'>Coimbatore</p>
           </div>
          {/* icon-2 */}
            <div className="flex flex-col items-center justify-center hover:bg-[url('/location_img_bg.png')] p-5 rounded-3xl bg-center bg-no-repeat">
               <Image
              width={ 116}
              height={104}
              src={'/location_icon_2.png' }
              alt='location image' />
            <p className='font-normal text-sm uppercase'>chennai</p>
           </div>
          {/* icon-3 */}
            <div className="flex flex-col items-center justify-center hover:bg-[url('/location_img_bg.png')] p-5 rounded-3xl bg-center bg-no-repeat">
               <Image
              width={ 116}
              height={104}
              src={'/location_icon_3.png' }
              alt='location image' />
            <p className='font-normal text-sm uppercase'>hyderabad</p>
           </div>
          {/* icon-4 */}
            <div className="flex flex-col items-center justify-center hover:bg-[url('/location_img_bg.png')] p-5 rounded-3xl bg-center bg-no-repeat">
               <Image
              width={ 116}
              height={104}
              src={'/location_icon_4.png' }
              alt='location image' />
            <p className='font-normal text-sm uppercase'>goa</p>
           </div>
          {/* icon-5 */}
            <div className="flex flex-col items-center justify-center hover:bg-[url('/location_img_bg.png')] p-5 rounded-3xl bg-center bg-no-repeat">
               <Image
              width={ 116}
              height={104}
              src={'/location_icon_5.png' }
              alt='location image' />
            <p className='font-normal text-sm uppercase'>Kochi</p>
           </div>
          {/* icon-6 */}
            <div className="flex flex-col items-center justify-center hover:bg-[url('/location_img_bg.png')] p-5 rounded-3xl bg-center bg-no-repeat">
               <Image
              width={ 116}
              height={104}
              src={'/location_icon_6.png' }
              alt='location image' />
            <p className='font-normal text-sm uppercase'>Mumbai</p>
           </div>
          </div>
        <div className='flex items-center justify-between gap-5'>
          {/* input field */}
          <div className='w-1/2'>
            <Card className="w-full bg-gradient-to-br from-[#000509ee] to-[#033a75ca]">
              <CardHeader>
                <CardTitle className='text-white font-normal text-4xl'>Contact Us</CardTitle>

              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6 mb-12">
                    <div className="grid gap-2">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className='outline-none border-none placeholder:text-white bg-[#ffffff27] p-5 rounded-3xl'

                      />
                    </div>
                    <div className="grid gap-2">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                        className='outline-none border-none placeholder:text-white bg-[#ffffff27] p-5 rounded-3xl'
                      />
                    </div>
                    <div className="grid gap-2">
                      <Input
                        id="phone"
                        type="number"
                        placeholder="Phone*"
                        required
                        className='outline-none border-none placeholder:text-white bg-[#ffffff27] p-5 rounded-3xl'
                      />
                    </div>
                    <div className="grid gap-2">
                      <Textarea placeholder="Write message"
                        className='outline-none border-none placeholder:text-white bg-[#ffffff27] p-5 rounded-3xl'
                      />
                    </div>
                  </div>
                  <Button label='Submit' />
                </form>
              </CardContent>

            </Card>
          </div>
          {/* map */}
          <div className='w-1/2 h-full relative'>
            <Image
              width={510}
              height={510}
              objectFit='cover'
              src="/map_1.png"
              alt='map image'
            />
            <div className='flex items-center  gap-5 absolute bottom-3 left-0 right-0 bg-white p-4 w-11/12  rounded-3xl ml-3'>
              <Image
                width={56}
                height={56}
                src={"/map_icon_1.png"}
                alt=''
              />
              <p>
            JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004
              </p>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default OurBranch;
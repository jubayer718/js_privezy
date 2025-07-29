import Image from "next/image";
import Container from "../shared/Container";


const Trusted = () => {
  return (
    <Container>
       <div className="w-full h-[330px] border-2 bg-[#002B55] rounded-3xl py-14 px-32 ">
        <h2 className="text-[42px] font-medium text-center text-white mb-12">Trusted by over 6K+ customers</h2>
        
        <div className="flex items-center justify-between gap-24 ">
          <div className="flex items-center gap-5">
            <span className="p-4 rounded-full bg-white ">
              <Image
                src={'/icon-1.png'}
                width={45}
                height={45}
                alt=""
              />
            </span>
            <div className="text-white ">
              <h4 className="font-medium text-3xl">Premium</h4>
              <p className="text-2xl">Products</p>
            </div>
          </div>

           <div className="flex items-center gap-5  ">
            <span className="p-4 rounded-full bg-white ">
              <Image
                src={'/icon-2.png'}
                width={45}
                height={45}
                alt=""
              />
            </span>
            <div className="text-white ">
              <h4 className="font-medium text-3xl">4000+</h4>
              <p className="text-2xl text-nowrap">Google Review</p>
            </div>
          </div>

           <div className="flex items-center gap-5 ">
            <span className="p-4 rounded-full bg-white ">
              <Image
                src={'/icon-3.png'}
                width={45}
                height={45}
                alt=""
              />
            </span>
            <div className="text-white ">
              <h4 className="font-medium text-3xl">Delivery</h4>
              <p className="text-2xl text-nowrap">Across India</p>
            </div>
          </div>

         
        </div>
    </div>
   </Container>
  );
};

export default Trusted;
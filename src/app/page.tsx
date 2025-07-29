import Agriculture from "@/components/layout/Agriculture";
import Banner from "@/components/layout/Banner";
import Landscape from "@/components/layout/Landscape";
import Trusted from "@/components/layout/Trusted";
import WhyUs from "@/components/layout/WhyUs";


export default function Home() {
  return (
    <>
      {/* Banner section */}
      <Banner/>     
      {/* Agriculture product section */}
      <Agriculture/>
      {/* Landscape product section */}
      <Landscape />
      {/* trusted customer section */}
      <Trusted />
      {/* Why Us section */}
      <WhyUs/>
    </>
  );
}

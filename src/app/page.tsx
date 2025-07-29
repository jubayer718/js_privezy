import Agriculture from "@/components/layout/Agriculture";
import Banner from "@/components/layout/Banner";
import Landscape from "@/components/layout/Landscape";


export default function Home() {
  return (
    <>
      {/* Banner section */}
      <Banner/>     
      {/* Agriculture product section */}
      <Agriculture/>
      {/* Landscape product section */}
      <Landscape/>
    </>
  );
}

import Gallery from "@/components/Shared/Gallery";
import Hero from "@/components/Shared/Hero";
import CardCarousel from "@/components/Shared/ReviewCarousel";
import ReviewCarousel from "@/components/Shared/ReviewCarousel";
import About from "./about/page";
import AboutPage from "@/components/Shared/About";
import Harmohny from "@/components/Shared/Harmohny";
import EventCard from "@/components/Shared/EventCard";
import Feature from "@/components/Shared/Feature";



const HomePage = () => {
  return (
    <div className="min-w-[80%] mx-auto">

      <Hero />
      <Gallery />
      <div className="my-8">
       {/* <Test/> */}
        <h1 className="text-center my-5">Customer Reviews</h1>
        <CardCarousel />
       <AboutPage/>
       <Harmohny/>
       <Feature/>
         
        
      </div>
    </div>
  );
};

export default HomePage;

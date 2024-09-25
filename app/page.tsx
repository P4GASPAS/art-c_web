import Navbar from "@/app/Navbar"
import Hero from "@/app/Hero"
import Marquee from "./Marquee";
import LandingCards from "./LandingCards";
import AboutUs from "./AboutUs";
import LandingStory from "./LandingStory";
import EmailUs from "./EmailUs";
import Footer from "@/app/Footer"

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <LandingCards />
      <AboutUs />
      <LandingStory />
      <EmailUs />
      <Footer />
    </>
  );
}

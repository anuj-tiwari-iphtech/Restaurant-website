import Description from "../Homepage/Description"
import Hero from "../Homepage/Hero"
import HomePageBanner from "../Homepage/HomePageBanner"
import SignatureBowlsSection from "../Homepage/SignatureBowls"
import Testimonials from "../Homepage/Testimonials"
import FollowUs from "../components/FollowUs"
import Footer from "../components/Footer"
export default function HomePage() {
  return (
    <>
        <Hero/>
        <SignatureBowlsSection/>
        <Testimonials/>
        <HomePageBanner/>
        <FollowUs/>
        <Footer/>
    </>
  )
}
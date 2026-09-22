import Hero from "../Homepage/Hero"
import HomePageBanner from "../Homepage/HomePageBanner"
import SignatureBowlsSection from "../Homepage/SignatureBowls"
import Testimonials from "../Homepage/Testimonials"
import FollowUs from "../components/FollowUs"
import { signatureBowlsData } from '../data/signatureBowlsData';
export default function HomePage() {
  return (
    <>
        <Hero/>
        <SignatureBowlsSection data={signatureBowlsData}/>
        <Testimonials/>
        <HomePageBanner/>
        <FollowUs/>
    </>
  )
}
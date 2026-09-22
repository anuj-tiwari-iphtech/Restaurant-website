import MenuHeroImage from "../AboutUs/MenuHeroImage";
import HomePageBanner from "../Homepage/HomePageBanner.jsx";
import SignatureBowlsSection from "../Homepage/SignatureBowls.jsx";
import Testimonials from "../Homepage/Testimonials.jsx";
import img from '../assets/menuimg.png'
import {menuData} from '../data/menuData.js'
import OwnBowlSection from "../AboutUs/OwnBowlSection.jsx";

export default function Menu() {
  return (
    <>
      <MenuHeroImage img={img}/>
      <SignatureBowlsSection data={menuData}/>
      <OwnBowlSection/>
      <Testimonials/>
      <HomePageBanner/>
    </>
  )
}
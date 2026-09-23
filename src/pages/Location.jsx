import LocationsSection from "../AboutUs/LocationSection";
import MenuHeroImage from "../AboutUs/MenuHeroImage";
import img from '../assets/location.jpg'
import FollowUs from "../components/FollowUs";
import RestaurantCard from "../components/RestaurantCard";

export default function Location() {
  return (
    <>
    <MenuHeroImage img={img}/>
    <LocationsSection/>
    <FollowUs/>
    </>
  )
}
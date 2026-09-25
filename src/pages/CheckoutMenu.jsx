import { useLocation, useNavigate } from 'react-router-dom';
import {menuData} from '../data/checkout.js'
import {drinksData} from '../data/checkout.js'
import MenuHeroImage from "../AboutUs/MenuHeroImage";
import MenuCardContainer from "../Checkouts/MenuCardContainer";
import img from '../assets/checkoutmenu.jpg'
import RestaurantAddress from '../Checkouts/RestaurantAddress.jsx';

export default function CheckoutMenu() {
  const location = useLocation();
  const restaurant = location.state?.restaurant;
  const orderType = location.state?.orderType;
  const navigate = useNavigate()
  return (
    <>
        <MenuHeroImage img={img}/>
        <RestaurantAddress 
          name={restaurant?.name || "Select a restaurant"} 
          address={restaurant?.address || "No location selected"}
          onChangeLocation={() => navigate('/select-restaurant')}
          initialOrderType={orderType || 'delivery'}
        />
        <MenuCardContainer data={menuData} head="Menu"/>
        <MenuCardContainer data={drinksData} head="Drinks"/>
    </>
  )
}
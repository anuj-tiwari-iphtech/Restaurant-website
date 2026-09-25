import CheckoutSection from "../Checkouts/CheckoutSection";
import MenuCardContainer from "../Checkouts/MenuCardContainer";
import {mightAlsoLike} from '../data/menuData.js'

export default function OrderReview() {
  return (
    <>
        <CheckoutSection/>
        <div style={{backgroundColor: '#ffffff'}}>

        <MenuCardContainer data={mightAlsoLike} head="You might also like"/>
        </div>
    </>
  )
}
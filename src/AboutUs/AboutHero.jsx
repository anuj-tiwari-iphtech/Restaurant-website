import img from '../assets/AboutUs/hero.jpg'
import './AboutHero.css'
export default function AboutHero() {
  return (
    <div className='about-hero-container'>
        <div className='about-us-wrapper'>
            <div className='about-us-img'>
                <img src={img} alt='About img' className='about-main-img'/>

                <div className='about-us-card'>
                    <h1>Our Story begins</h1>
                    <p className='about-us-card-first'>At Poke Now, we believe fast food should be fresh food. From our premium ingredients to our exceptional service, eating healthy has never been easier—or more enjoyable! </p>
                
                    <div className='about-us-card-second-part'>
                        <h2>What's poke</h2>
                        <p>Poke is a traditional Hawaiian dish that typically consists of diced raw fish (such as tuna or salmon) marinated in soy sauce and other flavorful ingredients. It is often served over a bed of rice and topped with various toppings like seaweed, cucumber, avocado, and sesame seeds.</p>
                    </div>
            
                <button>Order Now</button>
            </div>
            </div>
        </div>
    </div>
  )
}
import './Hero.css'
import img from '../assets/Homepage/hero.jpg'

export default function Hero() {
  return (
    <div className='homepage-hero'>
      {/* Hero Image & Card Wrapper */}
      <div className='heropage-hero-wrapper'>
        <div className='heropage-hero-img'>
          <img src={img} alt='hero-img' className='hero-main-img' />
        </div>

        <div className='hero-card'>
          <h1>ASIAN INSPIRED BOWLS</h1>

          <div className='card-down-section'>
            <p>Fresh, healthy, delicious</p>
            <button>Order Now</button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className='description-container'>
        <div className='description'>
          <h1>What's poke</h1>
          <p>
          Poke is a traditional Hawaiian dish that typically consists of diced raw fish (such as tuna or salmon) marinated in soy sauce and other flavorful ingredients. It is often served over a bed of rice and topped with various toppings like seaweed, cucumber, avocado, and sesame seeds. Poke has gained popularity worldwide and is now enjoyed in many different variations and flavors.
          </p>
        </div>
      </div>
    </div>
  )
}
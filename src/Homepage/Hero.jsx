import './Hero.css'
import img from '../assets/Homepage/hero.jpg'

export default function Hero() {
  return (
    <div className='homepage-hero'>
        <div className='heropage-hero-img'>
            <img src={img} alt='hero-img' className='hero-main-img'/>
        </div>

        <div className='hero-card'>
            <h1>ASIAN INSPIRED BOWLS</h1>

            <div className='card-down-section'>
                <p>Fresh, healthy, delicious</p>
                <button>Order Now</button>
            </div>
        </div>

    </div>
  )
}
import Bigimg from '../assets/Homepage/locartion/BigOne.jpg'
import SmallOne from '../assets/Homepage/locartion/smallOne.jpg'
import './LocationBanner.css'

export default function LocationBanner() {
  return (
    <div className='banner-container'>
        <div className='banner-left'>
            <h1>Find our locations</h1>
            <p>
            Serving fresh fish daily at Boston Harbor Islands, Boylston St, Congress St, Kendall Square, Cambridge St, Haviland St. 
            </p>

            <button>Location & Hours</button>
        </div>
        <div className='banner-right'>
            <img src={Bigimg} alt='BigOne' className='big-img'/>
            <img src={SmallOne} alt='Small One' className='small-img'/>
        </div>
    </div>
  )
}
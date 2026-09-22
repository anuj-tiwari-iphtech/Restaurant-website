import center from '../assets/AboutUs/center.jpg'
import upper from '../assets/AboutUs/upper.jpg'
import bottom from '../assets/AboutUs/bottom.jpg'

import './ModernResult.css'

export default function ModernResult() {
  return (
    <div className="modern-result-container">
        <div className="modern-result-wrapper">
            <div className='moder-result-content'>
                <h1 className="modern-result-header">Traditional Heritage, Modern Result</h1>
                <p className="modern-result-desc">
                One of the reasons for poke's popularity is its versatility. While the traditional version remains a favorite, there are now numerous variations available, allowing people to customize their poke bowls according to their preferences. 
                </p>
            </div>
            

            <div className="yellow-ring"></div>
            <img src={center} alt='center img' className='modern-result-center-img'/>
            <img src={upper} alt='upper img' className='modern-result-upper-img'/>
            <img src={bottom} alt='bottom img' className='modern-result-bottom-img'/>

        </div>
    </div>
  )
}

import './MenuHeroImage.css'
export default function MenuHeroImage({img}) {
  return (
    <div className="menu-hero-container">
        <div className="menu-hero-wrapper">
            <div className="menu-img-wrapper">
                <img src={img} alt="menu img" className="menu-main-img"/>
            </div>
        </div>
    </div>
  )
}
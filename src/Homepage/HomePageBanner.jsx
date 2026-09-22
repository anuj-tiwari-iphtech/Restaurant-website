import LocationBanner from "../components/LocationBanner"
import './HomePageBanner.css'
export default function HomePageBanner() {
  return (
    <div className="home-banner-container">
      <div className="home-page-banner">
        <LocationBanner/>
      </div>
    </div>
  )
}
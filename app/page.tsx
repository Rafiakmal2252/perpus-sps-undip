import Header from "@/components/Header"
import Footer from "@/components/footer-section"
import Landing from "@/components/landing-section"
import AboutUs from "@/components/about-us"
import Facility from "@/components/facility-section"
import Staff from "@/components/staff-section"
import ScrollProgressBar from '../components/ScrollProgressBar';
import UtilitySection from "@/components/utility-section"

export default function Home() {
  return (
    <div className="bg-backgrounds max-h-full">
            <ScrollProgressBar />
            <Header />
            <Landing />
            <AboutUs/>
            <UtilitySection/>
            <Facility/>
            <Staff/>
            <Footer/>
    </div>
  )
}

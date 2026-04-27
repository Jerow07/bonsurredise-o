import Ribbon from './components/layout/Ribbon'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TruckStage from './components/sections/TruckStage'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Units from './components/sections/Units'
import FleetStrip from './components/sections/FleetStrip'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Ribbon />
      <Navbar />
      <Hero />
      <TruckStage src="/truck.mp4" id="truck-stage" />
      <Services />
      <About />
      <TruckStage src="/truck2.mp4" id="truck-stage-2" reverse style={{ margin: '80px auto 60px' }} />
      <Units />
      <FleetStrip />
      <Contact />
      <Footer />
    </>
  )
}

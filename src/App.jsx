import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import ComparisonSection from './components/ComparisonSection'
import OfficialsSection from './components/OfficialsSection'
import HistoryTimeline from './components/HistoryTimeline'
import RegisterSection from './components/RegisterSection'
import ShareSection from './components/ShareSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <ComparisonSection />
      <OfficialsSection />
      <HistoryTimeline />
      <RegisterSection />
      <ShareSection />
      <Footer />
    </>
  )
}

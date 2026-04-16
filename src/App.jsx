import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Live from './pages/Live'
import Results from './pages/Results'
import Rankings from './pages/Rankings'
import MatchDetail from './pages/MatchDetail'
import Women from './pages/Women'
import WomenResults from './pages/WomenResults'
import WomenRankings from './pages/WomenRankings'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Live />} />
          <Route path="/results" element={<Results />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/match/:id" element={<MatchDetail />} />
          <Route path="/women" element={<Women />} />
          <Route path="/women/results" element={<WomenResults />} />
          <Route path="/women/rankings" element={<WomenRankings />} />
        </Routes>
      </main>
      <footer className="text-center py-6 text-xs text-gray-600 border-t border-white/5">
        CourtSide — College Tennis Live
      </footer>
    </div>
  )
}

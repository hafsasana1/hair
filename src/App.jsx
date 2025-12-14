import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { QuizProvider } from '@/context/QuizContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Quiz from '@/pages/Quiz';
import Results from '@/pages/Results';
import Blog from '@/pages/Blog';
import About from '@/pages/About';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import CurlyHairRoutine from '@/pages/CurlyHairRoutine';
import WavyHairRoutine2B from '@/pages/WavyHairRoutine2B';
import LowPorosityRoutine from '@/pages/LowPorosityRoutine';
import FrizzyHairRoutine from '@/pages/FrizzyHairRoutine';
import OilyScalpRoutine from '@/pages/OilyScalpRoutine';
import HairGrowthRoutine from '@/pages/HairGrowthRoutine';
import DamagedHairRoutine from '@/pages/DamagedHairRoutine';
import DryScalpRoutine from '@/pages/DryScalpRoutine';
import HighPorosityRoutine from '@/pages/HighPorosityRoutine';
import StraightHairRoutine from '@/pages/StraightHairRoutine';

import HairPorosityGuide from '@/pages/blog/HairPorosityGuide';
import NaturalIngredientsGuide from '@/pages/blog/NaturalIngredientsGuide';
import HeatDamageProtection from '@/pages/blog/HeatDamageProtection';
import HairTypesGuide from '@/pages/blog/HairTypesGuide';
import SeasonalHairCare from '@/pages/blog/SeasonalHairCare';
import DIYHairMasks from '@/pages/blog/DIYHairMasks';
import HairGrowthGuide from '@/pages/blog/HairGrowthGuide';

function App() {
  return (
    <Router>
      <QuizProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/hair-routine-for-curly-hair" element={<CurlyHairRoutine />} />
              <Route path="/hair-routine-for-2b-hair" element={<WavyHairRoutine2B />} />
              <Route path="/hair-routine-for-low-porosity" element={<LowPorosityRoutine />} />
              <Route path="/hair-routine-for-frizzy-hair" element={<FrizzyHairRoutine />} />
              <Route path="/hair-routine-for-oily-scalp" element={<OilyScalpRoutine />} />
              <Route path="/hair-routine-for-hair-growth" element={<HairGrowthRoutine />} />
              <Route path="/hair-routine-for-damaged-hair" element={<DamagedHairRoutine />} />
              <Route path="/hair-routine-for-dry-scalp" element={<DryScalpRoutine />} />
              <Route path="/hair-routine-for-high-porosity" element={<HighPorosityRoutine />} />
              <Route path="/hair-routine-for-straight-hair" element={<StraightHairRoutine />} />
              
              {/* Blog Posts */}
              <Route path="/blog/hair-porosity-guide" element={<HairPorosityGuide />} />
              <Route path="/blog/natural-ingredients-for-healthy-hair" element={<NaturalIngredientsGuide />} />
              <Route path="/blog/heat-damage-protection" element={<HeatDamageProtection />} />
              <Route path="/blog/hair-types-guide" element={<HairTypesGuide />} />
              <Route path="/blog/seasonal-hair-care" element={<SeasonalHairCare />} />
              <Route path="/blog/diy-hair-masks" element={<DIYHairMasks />} />
              <Route path="/blog/hair-growth-guide" element={<HairGrowthGuide />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </QuizProvider>
    </Router>
  );
}

export default App;
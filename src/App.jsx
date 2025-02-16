import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextRevealPreloader from './components/preloader/TextRevealPreloader';
import Home from './pages/Home';
import Event from './pages/Event';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <TextRevealPreloader />}
      <div className={`min-h-screen bg-[#5E0601] ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

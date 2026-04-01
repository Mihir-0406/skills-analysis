import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analyze from './pages/Analyze';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

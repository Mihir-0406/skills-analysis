import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analyze from './pages/Analyze';
import About from './pages/About';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Analyze />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

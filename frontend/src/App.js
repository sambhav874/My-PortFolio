import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from './components/config/particles-config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Projects from './components/Project';
import Header from './components/header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error tracking service (e.g., Sentry)
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}


function logErrorToService(error, errorInfo) {
  // Implement your error tracking service logic here
  console.error(error, errorInfo);
}

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log('Particles loaded!', container);
    // Add your logic here if needed
  };

  if (init) {
    return (
      <Router>
        <ErrorBoundary>
          <div className="App">
            <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesConfig} />

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <Routes>
              <Route path="/" element={<React.Fragment><Header /><Home /></React.Fragment>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />

              
        
            </Routes>

            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    );
  }

  return <></>;
}

export default App;

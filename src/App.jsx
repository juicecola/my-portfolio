// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // We'll create this helper

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes here if needed, e.g., for individual project pages */}
            {/* <Route path="/project/:projectId" element={<ProjectDetailPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav/SideNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <main className="main-content">
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

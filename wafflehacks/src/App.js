
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Host from './pages/Host';
import Find from './pages/Find';




function App() {
  return (
    <Router>
      <div class="myDiv">
        <header>
          <h1>Village <img src="favicon-32x32.png" alt="Savannah Wimpey" /> Sync</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/host">Host</Link></li>
              <li><Link to="/find">Find</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/host" element={<Host />} />
            <Route path="/find" element={<Find />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

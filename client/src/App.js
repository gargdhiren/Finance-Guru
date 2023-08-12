import React, { useState } from 'react';
import './App.css';
import EnglishBeginnerPage from './EnglishBeginnerPage';
import HindiBeginnerPage from './HindiBeginnerPage';
import QuizComponent from './QuizComponent';
import Calculator from './calculator';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';


function App() {
  const [language, setLanguage] = useState('English');

  const handleClick = () => {
    setLanguage(prevLanguage => (prevLanguage === 'English' ? 'Hindi' : 'English'));
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">
            Finance Guru
        </div>
        <button className="language-toggle" onClick={handleClick}>
          {language === 'English' ? 'हिंदी' : 'English'}
        </button>
        <ul className="nav-links">
        <li>
            <Link to='/about'>Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/beginnerCourse">Beginner's Course</Link>
          </li>
          <li>
            <Link to="/advancedCourse">Advanced Course</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/beginnerCourse" element={<EnglishBeginnerPage language={language} />} />
        <Route path="/quiz" element={<QuizComponent language={language} />} />
        <Route path="/advancedCourse" element={<HindiBeginnerPage language={language} />} />
        <Route path="/about" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

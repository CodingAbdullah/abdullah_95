import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeisurePage from './Components/LeisurePage/LeisurePage.jsx';
import SkillsPage from './Components/SkillsPage/SkillsPage.jsx';
import LichessPage from './Components/LiChessPage/LiChessPage.jsx';
import ResumePage from './Components/ResumePage/ResumePage.jsx';

const App = () => {
    return (
      <span>      
        <Router>  
          <Header />
          <Routes>
            <Route exact path="/about" element={<AboutPage />}></Route>
            <Route exact path="/resume" element={ <ResumePage />}></Route>
            <Route exact path="/skills" element={ <SkillsPage /> }></Route>
            <Route exact path="/leisure" element={ <LeisurePage /> }></Route>
            <Route exact path="/lichess" element={ <LichessPage /> }></Route>
            <Route exact path="/AbdulM95" element={ <HomePage /> }></Route>
            <Route exact path="/" element={ <HomePage /> }></Route>.
          </Routes>
        </Router>
        <Footer />
      </span>
    );
}

export default App;
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
      <>
        <Header />
        <Router basename='/AbdulM95'>
          <Routes>
            <Route exact path="/" element={ <HomePage /> }></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/resume" element={ <ResumePage />}></Route>
            <Route path="/skills" element={ <SkillsPage /> }></Route>
            <Route path="/leisure" element={ <LeisurePage /> }></Route>
            <Route path="/lichess" element={ <LichessPage /> }></Route>
          </Routes>
        </Router>
        <Footer />
      </>
    );
}

export default App;
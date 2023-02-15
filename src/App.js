import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeisurePage from './Components/LeisurePage/LeisurePage.jsx';
import SkillsPage from './Components/SkillsPage/SkillsPage.jsx';
import LichessPage from './Components/LiChessPage/LiChessPage.jsx';
import ResumePage from './Components/ResumePage/ResumePage.jsx';
import PortfolioPage from './Components/PortfolioPage/portfoliopage.jsx';
import Page404 from './Components/Page404/page404.jsx';

const App = () => {
    return (
      <>
        <Header />
          <Routes>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/resume" element={ <ResumePage />}></Route>
            <Route path="/skills" element={ <SkillsPage /> }></Route>
            <Route path="/leisure" element={ <LeisurePage /> }></Route>
            <Route path="/lichess" element={ <LichessPage /> }></Route>
            <Route path="/portfolio" element={<PortfolioPage />}></Route>
            <Route exact path="/" element={ <HomePage /> }></Route>
            <Route exact path="*" element={<Page404 />}></Route>
          </Routes>
        <Footer />
      </>
    );
}

export default App;
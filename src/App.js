import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
              <Route exact path="/about" element={<AboutPage />}></Route>
              <Route exact path="/resume" element={ <ResumePage />}></Route>
              <Route exact path="/skills" element={ <SkillsPage /> }></Route>
              <Route exact path="/leisure" element={ <LeisurePage /> }></Route>
              <Route exact path="/lichess" element={ <LichessPage /> }></Route>
              <Route exact path="/portfolio" element={<PortfolioPage />}></Route>
              <Route exact path="/" element={ <HomePage /> }></Route>
              <Route exact path="*" element={<Page404 />}></Route>
            </Routes>
        <Footer />
      </>
    );
}

export default App;
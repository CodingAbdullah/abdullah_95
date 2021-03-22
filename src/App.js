import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeisurePage from './Components/LeisurePage/LeisurePage.jsx';
import SkillsPage from './Components/SkillsPage/SkillsPage.jsx';
import LichessPage from './Components/LiChessPage/LiChessPage.jsx';
import ResumePage from './Components/ResumePage/ResumePage.jsx';

class App extends Component {

  render = () => {
    return (
      <span>      
        <Router>  
          <Header />
          <Switch>
            <Route path="/about" exact component={AboutPage}>
              <AboutPage />
            </Route>
            <Route path="/resume" exact component={ResumePage}>
              <ResumePage />
            </Route>
            <Route path="/skills" exact component={SkillsPage}> 
              <SkillsPage />
            </Route>
            <Route path="/leisure" exact component={LeisurePage}>
              <LeisurePage />
            </Route>
            <Route path="/lichess" exact component={LichessPage}>
              <LichessPage />
            </Route>
            <Route path="/" exact component={HomePage}>
              <HomePage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </span>
    );
  }
}

export default App;
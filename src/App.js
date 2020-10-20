import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarouselHomePage from "./components/pages/CarouselHomePage";
import ChampionshipsList from './components/ChampionshipsList';
import Standings from './components/Standings';
import About from './components/pages/About';
import PlayerDetails from './components/PlayerDetails';
import PlayersList from "./components/PlayersList";
// Theme
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/Theme";
import { useDarkMode } from './theme/useDarkMode';




function App() {
  // const [theme, themeToggler] = useState('light');
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  

  if (!mountedComponent) return <div></div>;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <div className="App">
            <Navbar theme={theme} toggleTheme={themeToggler} />
            <Route exact path="/" component={CarouselHomePage} />
            <Route path="/about" component={About} />
            <Route exact path="/championships" component={ChampionshipsList} />
            <Route path="/championships/:id" component={Standings} />
            <Route path="/players" component={PlayersList} />
            <Route path="/player/:id" component={PlayerDetails} />
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;

import React, {useState} from 'react';
import MainPage from './components/Page/MainPage';
import MatchesPage from './components/Page/MatchesPage';
import './App.css';
import { Astromatch, StyledLink } from './components/Constants/styles';


const App = () => {
  const [currentPage, setCurrentPage] = useState("mainPage")

  const renderPage = () => {
    if(currentPage === 'mainPage'){
      return (
        <MainPage changePage={changePage}/>
      )
    } else if (currentPage ==='matchesPage')
      return <MatchesPage changePage={changePage}/>
  };

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <Astromatch>💞 AstroMatch 💞</Astromatch>
      {renderPage()}
      <div class="footer">
        <StyledLink href="https://www.linkedin.com/in/douglasrp/" target="_blank">Desenvolvido por - Douglas rodrigues🥵</StyledLink>
      </div>
    </div>
    
  );
}

export default App;


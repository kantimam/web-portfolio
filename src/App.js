import React, { useRef, useState, useEffect } from 'react';
import MetaBallsWrapper from './components/MetaBallsWrapper';
import PortfolioSection from './components/PortfolioSection';
import WelcomeSection from './components/WelcomeSection';
import Nav from './components/Nav';




function App() {
  const [showBG, setBG] = useState(true);
  const [scrollPercent, setScroll] = useState(0);

  const portfolioSectionRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [showBG, scrollPercent])

  const handleScroll = () => {
    
    const scrollP = window.scrollY / window.innerHeight;
    
    setScroll(scrollP);
    /* hide the webGL background if the second page is fully visible */
    if (scrollP >= 1) {
      if(showBG) setBG(false);
    }
    else {
      if(!showBG) setBG(true);
    }
  }

  const scrollToPortfolio = () => {
    portfolioSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }



  const scrollToOpacity = scrollPercent > 1 ? 1 : scrollPercent * scrollPercent;
  return (
    <>
      {showBG &&
        <MetaBallsWrapper />
      }
      <div className="App">

        <main style={{ backgroundColor: `rgba(240, 240, 240, ${scrollToOpacity})` }}>
          <Nav />
          <WelcomeSection scrollToPortfolio={scrollToPortfolio} />
          <PortfolioSection ref={portfolioSectionRef} />
        </main>
      </div>
    </>

  );
}

export default App;

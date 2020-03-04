import React, {useRef, useState, useEffect} from 'react';
import MetaBallsWrapper from './components/MetaBallsWrapper';
import PortfolioSection from './components/PortfolioSection';
import WelcomeSection from './components/WelcomeSection';




function App() {
  const [showBG, setBG]=useState(true);
  const [scrollPercent, setScroll]=useState(0);

  const mainScrollRef=useRef(null);
  const portfolioSectionRef=useRef(null);

  useEffect(() => {
    const currentRef=mainScrollRef.current;
    currentRef.addEventListener('scroll',handleScroll);
    return () => {
      currentRef.removeEventListener('scroll',handleScroll)
    };
  }, [showBG, scrollPercent])

  const handleScroll=(event)=>{
    const scrollP=event.target.scrollTop / event.target.clientHeight;
    
    setScroll(scrollP);
    if(showBG && scrollP>=1){
      setBG(false);
    }
    else{
      setBG(true);
    }
  }

  const scrollToPortfolio=()=>{
    portfolioSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  

  const scrollToOpacity=scrollPercent>1? 1 : scrollPercent*scrollPercent;
  return (
    <div className="App">
      {showBG&&
        <MetaBallsWrapper/>
      }

      <main style={{backgroundColor: `rgba(200, 130, 100, ${scrollToOpacity})`}} ref={mainScrollRef}>
        <WelcomeSection scrollToPortfolio={scrollToPortfolio}/>
        <PortfolioSection ref={portfolioSectionRef}/>
      </main>
    </div>
  );
}

export default App;

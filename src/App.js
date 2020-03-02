import React, {useRef, useState, useEffect} from 'react';
import MetaBallsWrapper from './components/MetaBallsWrapper';
import PortfolioSection from './components/PortfolioSection';


function App() {
  const [showBG, setBG]=useState(true);
  const [fadeOut, setFadeOut]=useState(false);
  const mainScrollRef=useRef(null);

  useEffect(() => {
    const currentRef=mainScrollRef.current;
    currentRef.addEventListener('scroll',handleScroll);
    return () => {
      currentRef.removeEventListener('scroll',handleScroll)
    };
  }, [fadeOut, showBG])

  const handleScroll=(event)=>{
    if(showBG && event.target.scrollTop>=event.target.clientHeight){
      setFadeOut(true);
    }
    else{
      setFadeOut(false);
      setBG(true);
    }
  }

  const closeIfValid=()=>{
    if(fadeOut){      
      setBG(false);
    }
  }

  return (
    <div className="App">
      {showBG&&
        <MetaBallsWrapper showBG={closeIfValid} fadeOut={fadeOut}/>
      }
      <main ref={mainScrollRef}>
        <section className="flexCenterAll" id="welcomePage">
          ASD
        </section>
        <PortfolioSection  fadeIn={fadeOut}/>
      </main>
    </div>
  );
}

export default App;

import React, { Component } from 'react'
import MetaBallsWrapper from './components/MetaBallsWrapper';
import PortfolioSection from './components/PortfolioSection';
import WelcomeSection from './components/WelcomeSection';
import Nav from './components/Nav';
import ImageSlider from './components/ImageSlider';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';



export default class App extends Component {
  portfolioSectionRef = React.createRef(null);
  contactSectionRef = React.createRef(null);
  state = {
    showBG: true,
    scrollPercent: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)

  }

  handleScroll = () => {

    const scrollP = window.scrollY / window.innerHeight;

    this.setState({ scrollPercent: scrollP });
    /* hide the webGL background if the second page is fully visible */
    if (scrollP >= 1) {
      if (this.state.showBG) this.setState({ showBG: false });
    }
    else {
      if (!this.state.showBG) this.setState({ showBG: true });
    }
  }
  scrollToPortfolio = () => {
    this.portfolioSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  scrollToContact = () => {
    this.contactSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0, left: 0,
      behavior: 'smooth',
      block: 'start'
    })
  }

  render() {
    const scrollToOpacity = this.state.scrollPercent > 1 ? 1 : this.state.scrollPercent * this.state.scrollPercent;
    return (
      <>
        {this.state.showBG &&
          <MetaBallsWrapper />
        }
        <div className="App">

          <main style={{ "--bg-opacity": scrollToOpacity }}>
            <Nav
              bgOpacity={scrollToOpacity}
              scrollToPortfolio={this.scrollToPortfolio}
              scrollToContact={this.scrollToContact}
              scrollTop={this.scrollTop}
            />
            <WelcomeSection scrollToPortfolio={this.scrollToPortfolio} />
            <PortfolioSection ref={this.portfolioSectionRef} />
            <ContactSection ref={this.contactSectionRef} />
          </main>
        </div>
      </>
    )
  }
}

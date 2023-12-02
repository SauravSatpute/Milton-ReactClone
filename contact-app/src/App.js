import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import Header from './components/Header.js';
import Section from './components/Section.js';
import BigText from './components/BigText.js';
import CardSection from './components/CardSection.js';
import ReviewSection from './components/ReviewSection.js';
import PricingSection from './components/PricingSection.js';
import HeaderText from './components/HeaderText.js';
import FooterDiv from './components/FooterDiv.js';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Header />
      <Section/>
      <CardSection/>
      <ReviewSection/>
      <PricingSection/>
      <HeaderText/>
      <FooterDiv/>
    </div>
  );
}

export default App;

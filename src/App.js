import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import LeftSection from './Components/Sections/LeftSection';
import MiddleSection from './Components/Sections/MiddleSection';
import RightSection from './Components/Sections/RightSection';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <MiddleSection/>
      <RightSection />
      <LeftSection />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './HomeNavbar';
import Footer from './Footer';
import '../components/Home.css';
import HomeBody from './HomeBody';
import About from './About';
import Contact from './Contact';


function Home() {
  return (
    <div className='hero'>
      <header>
        <Navbar />
      </header>
      <div className='body' id='home'>
        <HomeBody />
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id='contact'>
        <Contact></Contact>
      </div>
      <Footer />
    </div>
  )
}

export default Home

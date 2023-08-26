import './App.css';
import Header from './Header';
import Cardlist from './Cardlist';
import Tutoriallist from './Tutoriallist';
import Footer from './Footer';
import NewsletterSignup from './NewsletterSignup';

function App() {
  return (
    <div>
      <Header />
      <div className="image-section">
        <div className="image-container">
          <img src="./img/game.png" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-logo-text">Image</h1>
        </div>
      </div>
      <div className="center-text">
        <h1>Featured Articles</h1>
      </div>
      <Cardlist />
      <div className="center-text">
        <h1>Featured Tutorials</h1>
      </div>
      <Tutoriallist/>
      <NewsletterSignup /> 
      <Footer />
    </div>
  );
}

export default App;

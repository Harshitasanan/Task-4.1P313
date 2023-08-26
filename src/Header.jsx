import './Header.css'
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="navbar">
      <div className='space'>
      <div className="navbar-item">
        DEV@Deakin
      </div>
      <div className="navbar-item">
        <div className="ui right aligned category search">
          <div className="ui icon input">
            <SearchBar />
          </div>
          <div className="results"></div>
        </div>
      </div>
      </div>
      <div className='navbar-item buttons'>
      <button className="navbar-item">Post</button>
      <button className="navbar-item">Login</button>
      </div>
    </div>
  );
}

export default Header;

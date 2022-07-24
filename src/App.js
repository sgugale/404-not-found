import logo from './Scarecrow.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-heading">404 NOT FOUND</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-contents'>
          <div className='Main-text'>I have a bad news for you</div>
          <div className='Description-text'>The page you are looking for might be removed or is temporarily unavailable</div>
          <button className='Back-button'>BACK TO HOMEPAGE</button>
        </div>
      </header>
      <footer className='App-footer'>Created by snehalgugale - devChallenges.io</footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import Timer from './components/Timer.js';
import AboutUs from './components/AboutUs.js';
import Event from './components/Event.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Timer />
      <AboutUs />
      <Event />
    </div>
  );
}

export default App;

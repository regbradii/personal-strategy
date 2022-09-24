import logo from './logo.svg';
import './App.css';
import Spiritual from './Spiritual.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Reggie Bradshaw's Personal Mission Statement
      </header>
      <section>
        <div>
          I will strive to live worthy of the inspiration of the Holy Ghost by acting in accordance with the teachings of Jesus Christ, His Prophets, and the instructions of the Holy Ghost in all aspects of my life.
        </div>
        <div>
          I will work to provide spiritually, temporally, and emotionally for my wife and children.
        </div>
        <div>
          I will look for and act on opportunities to lift others through inclusion, instruction, and service.
        </div>
      </section>
      <Spiritual />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Checkbox from './conponents/checkbox'
import Button from './conponents/button'

function App() {
  return (
    <div className="App">
      <Checkbox text='Enabled'/>
      <Checkbox text='Auto-refresh every 5 second'/>
      <Button/>
      {/* <Image/> */}




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

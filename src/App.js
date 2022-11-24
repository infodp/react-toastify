import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Basic />
      </header>
    </div>
  );
}

export default App;

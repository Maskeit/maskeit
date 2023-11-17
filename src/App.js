import './App.css';
import {Header} from './components/Header'
import { Hero } from './components/Hero';
function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
      <Hero/>
      </header>
    </div>
  );
}

export default App;

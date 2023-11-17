import './App.css';
import './styles/Header.css'
import './styles/Hero.css'
import './styles/Aboutme.css'
import {Header} from './components/Header'
import { Hero } from './components/Hero';
import { Aboutme } from './components/Aboutme';
function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <main>
        <section className="Hero">
          <Hero />
        </section>        
        <section className="Aboutme">
          <Aboutme />
        </section>
          {/* <section className="proyectos-section">
            <Proyectos />
          </section>
          <section className="contacto-section">
            <Contacto />
          </section> */}
      </main>
    </div>
  );
}


export default App;

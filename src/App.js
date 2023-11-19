import "./App.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/Aboutme.css";
import "./styles/Projects.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Aboutme } from "./components/Aboutme";
import { Projects } from "./components/Projects";
export const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <main>
        <section className="Hero" id="Hero">
          <Hero />
        </section>
        <section className="Aboutme" id="Aboutme">
          <Aboutme />
        </section>
        <section className="Projects" id="Projects">
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default App;

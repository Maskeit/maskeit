import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { Footer} from "./components/Footer";

export const App = () => {
  return (
    <div className="App">
        <Header/>
        <Home/>
       {/* 
        <Footer/> */}
    </div>
  );
};

export default App;

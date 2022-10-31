import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact.js";
import FinalComp from "./components/FinalComp.js";
import Guide from "./components/Guide.js";
import Resources from "./components/Resources.js";
import Timeline from "./components/Timeline.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Guide />
        <div class="buffer"></div>
        <Contact />
        <div class="buffer"></div>
        <Timeline />
        <div class="buffer"></div>
        <Resources />
        <div class="buffer"></div>
        <FinalComp />
      </header>
    </div>
  );
}

export default App;

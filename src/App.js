import './App.css';
import Navbar from "./components/Navbar.js";
import { Router } from "@reach/router";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App-container"> 
        <Router>
          
        </Router>
      </div>
    </>
  );
}

export default App;

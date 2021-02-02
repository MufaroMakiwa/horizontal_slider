import './App.css';
import Navbar from "./components/Navbar.js";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App-container"> 
        <Router>
          <HomePage path="/"/>
          
        </Router>
      </div>
    </>
  );
}

export default App;

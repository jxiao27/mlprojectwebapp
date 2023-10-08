import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SignIn from './pages/sign-in/SignIn.js'
import SignUp from './pages/sign-up/SignUp.js'
import { useRef } from 'react';

function App() {


  return (
    <Router>
    <div className="App">
    <ul className="App-header"> 
      <li> 
          <Link to="./pages/sign-in">Sign-in</Link> 
      </li> 
      <li> 
          <Link to="./pages/sign-up">Sign-up</Link> 
      </li> 
    </ul>
      <Routes>
        <Route exact path="./pages/sign-in" element={ <SignIn/> } />
        <Route exact path="./pages/sign-up" element={ <SignUp/> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

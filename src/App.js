import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import {Register} from "./components/Register";
import {Vote} from "./components/Vote";
import {CreateElection} from "./components/CreateElection";

function App() {
  return (
      <BrowserRouter>
          <nav>
              <ul className="menu">
                  <li className="menu-item"><Link to="/register">Register</Link></li>
                  <li className="menu-item"><Link to="/vote">Vote</Link></li>
                  <li className="menu-item"><Link to="/createElection">Create Election</Link></li>
              </ul>
          </nav>
          <Routes>
              <Route path="/register" element={<Register/>}/>
              <Route path="/vote" element={<Vote/>}/>
              <Route path="/createElection" element={<CreateElection/>}/>
              <Route path="*" element={<Vote/>}/>
          </Routes>
          <footer>Some Footer </footer>
      </BrowserRouter>
  );
}

export default App;

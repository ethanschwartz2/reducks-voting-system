import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import { Provider } from 'react-redux';
import {Vote} from "./components/Vote";
import {CreateElection} from "./components/CreateElection";
import { voterToolStore } from "./stores/voterToolStore";
import { Register } from "./components/Register";

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
              <Route path="/register" element={
                <Provider store={voterToolStore}>
                    <Register />
                </Provider>
              }/>
              <Route path="/vote" element={<Vote/>}/>
              <Route path="/createElection" element={<CreateElection/>}/>
              <Route path="*" element={<Vote/>}/>
          </Routes>
          <footer>Some Footer </footer>
      </BrowserRouter>
  );
}

export default App;

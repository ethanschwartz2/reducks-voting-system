import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {Register} from "./components/Register";
import {Vote} from "./components/Vote";
import {CreateElection} from "./components/CreateElection/CreateElection";
import {Layout} from "./Layout";
import { voterToolStore } from "./stores/voterToolStore";
import { Provider } from "react-redux";

function App() {
  return (
      <Layout>
          <BrowserRouter>
              <header><h1>ReDucks Voting System</h1></header>
              <nav>
                  <ul className="menu">
                      <li className="menu-item"><Link to="/register">Register</Link></li>
                      <li className="menu-item"><Link to="/vote">Vote</Link></li>
                      <li className="menu-item"><Link to="/createElection">Create Election</Link></li>
                  </ul>
              </nav>
              <main>
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
              </main>
              <footer>Some Footer Text</footer>
          </BrowserRouter>
      </Layout>
  );
}

export default App;
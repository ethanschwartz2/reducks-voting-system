import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import logo from '../src/img/ReDucks.jpg'

import {Register} from "./components/Register";
import {Vote} from "./components/Vote";
import {CreateElection} from "./components/CreateElection/CreateElection";
import {Layout} from "./Layout";

import { useVoterToolReduxStore } from "./hooks/useVoterToolReduxStore";
import { useBallotReduxStore } from "./hooks/useBallotReduxStore";

function App() {
    const {
        resetBallotFormData,
    } = useBallotReduxStore();

    const {
        resetVoterFormData,
    } = useVoterToolReduxStore()

    return (
      <Layout>
          <BrowserRouter>
              <header><img src={logo} alt="logo" style={{width:'125px',position:'absolute',left:"0", marginTop:'40px'}}/> <h1>ReDucks Voting System</h1></header>
              <nav>

                  <ul className="menu">
                      <li className="menu-item" onClick={() => resetBallotFormData()}
                      ><Link to="/register">Register</Link></li>
                      <li className="menu-item" onClick={ () => { resetVoterFormData()
                      }}><Link to="/vote">Vote</Link></li>
                      <li className="menu-item" onClick={() => {
                          resetBallotFormData();
                          resetVoterFormData();
                      }}>
                      <Link to="/createElection">Create Election</Link></li>
                  </ul>
              </nav>
              <main>
                    <Routes>
                        <Route path="/register" element={
                             <Register />
                        }/>
                        <Route path="/vote" element={
                            <Vote/>
                        }/>
                        <Route path="/createElection" element={<CreateElection/>} />
                        <Route path="*" element={<Vote/>}/>
                    </Routes>
              </main>
              <footer>“Testing leads to failure, and failure leads to understanding.” - Burt Rutan</footer>
          </BrowserRouter>
      </Layout>
  );
}

export default App;
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import {Register} from "./components/Register";
import {Vote} from "./components/Vote";
import {CreateElection} from "./components/CreateElection/CreateElection";
import {Layout} from "./Layout";

// import { useVoterToolReduxStore } from "./hooks/useVoterToolReduxStore";
import { useBallotReduxStore } from "./hooks/useBallotReduxStore";
import { ELECTIONS_FLOW } from "./reducers/ballotReducers";

function App() {
    const {
        updateVoteFlow,
    } = useBallotReduxStore();

    return (
      <Layout>
          <BrowserRouter>
              <header><h1>ReDucks Voting System</h1></header>
              <nav>
                  <ul className="menu">
                      //<li className="menu-item" onSelect={() => updateVoteFlow(ELECTIONS_FLOW)} 
                      ><Link to="/register">Register</Link></li>
                      <li className="menu-item" onSelect={ () => {
                      }}><Link to="/vote">Vote</Link></li>
                      <li className="menu-item" onSelect={() => {
                          updateVoteFlow(ELECTIONS_FLOW);
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
              <footer>Some Footer Text</footer>
          </BrowserRouter>
      </Layout>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from './components/Homepage';


function App() {
  return (
    <Router>
      <header className="App-header">
        <Main>
          <Switch>
            <Route path='/' exact component={Homepage} />
          </Switch>
        </Main>
      </header>
    </Router>
  );
}

export default App;

const Main = styled.main`
  flex:1;
  padding: 1rem;
  `;

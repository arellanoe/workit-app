import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Homepage from './components/Homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Main>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={< Homepage />} />
          </Routes>
        </Main>
      </header>
    </BrowserRouter>
  );
}

export default App;

const Main = styled.main`
  flex:1;
  padding: 1rem;
  `;

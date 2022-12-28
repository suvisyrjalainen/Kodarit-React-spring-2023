import React from 'react';
import './App.css';
import { Router }from "./pages/Router";
import { Home } from "./pages/Home";
import { Button } from './pages/Button';
import { Counters } from './pages/Counters';
import { Items } from './pages/Items';
import { TicTacToe } from './tictactoe/TicTacToe';
import { List } from './pages/List';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//App.js that works as the base of the project, here we render the components. 
//After the addition of router, the components are rendered with the Browser router, feature of React Router.
function App() {

  return (
    <BrowserRouter>
    {/*Inside the BrowserRouter element we are rendering our components*/}
    <div>
      <Routes>{/*Inside the routes tag is the parent route*/}
        <Route path='/' element={<Router />}>{/*The parent route will contain every other component*/}
          <Route index element={<Home />} />{/*The route with an index attribute will work as the sites "Homepage" */}
          <Route path='List' element={<List />} />{/*Rest of the routes are the same, route to the component we want to display using the path*/}
          <Route path='Button' element={<Button />} />
          <Route path='Counters' element={<Counters />} />
          <Route path='Items' element={<Items />} />
          <Route path='TicTacToe' element={<TicTacToe />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
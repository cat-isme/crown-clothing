import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';

import{BrowserRouter,Switch,Route} from 'react-router-dom';

const HatPage = () =>(
  <div>Hat Page</div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

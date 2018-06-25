import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignupBtn';
import Gallery from './components/Gallery/Gallery';
import ContactMe from './components/ContactMe/ContactMe';
import {BrowserRouter,Route} from 'react-router-dom';
import 'tachyons';

ReactDOM.render(<BrowserRouter>
                  <div>
                  <Route exact path='/' component={App}></Route>
                  <Route exact path='/sign_up' component={SignUp}></Route>
                  <Route exact path='/gallery' component={Gallery}></Route>
                  <Route exact path='/contact_me' component={ContactMe}></Route>
                  </div>
                </BrowserRouter>, document.getElementById('root'));

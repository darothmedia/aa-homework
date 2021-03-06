import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';
import Orange from './orange';
import Yellow from './yellow';
import Indigo from './indigo'

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}
        <NavLink exact to="/red">Red only</NavLink>
        <NavLink to="/red/orange">Add orange</NavLink>
        <NavLink to="/red/yellow">Add yellow</NavLink>
        <NavLink to="/green">Green</NavLink>
        <NavLink exact to="/blue">Blue only</NavLink>
        <NavLink to="/blue/indigo">Add indigo</NavLink>
        <NavLink to="/violet">Violet</NavLink>


        <div id="rainbow">
          {/* Your routes should go here */}
          <Route path="/red" component={Red}/>
          <Route path="/red/orange" component={Orange} />
          <Route path="/red/yellow" component={Yellow} />
          <Route path="/green" component={Green} />
          <Route path="/blue" component={Blue} />
          <Route path="/blue/indigo" component={Indigo} />
          <Route path="/violet" component={Violet} />
        </div>
      </div>
    );
  }
};

export default Rainbow;

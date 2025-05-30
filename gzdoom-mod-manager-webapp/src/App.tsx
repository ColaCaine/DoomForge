import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileManager from './components/ProfileManager';
import ModLibrary from './components/ModLibrary';
import PlaceholderGZDoom from './components/PlaceholderGZDoom';
import PlaceholderZDL from './components/PlaceholderZDL';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>GZDoom Mod Manager</h1>
        <Switch>
          <Route path="/profiles" component={ProfileManager} />
          <Route path="/mods" component={ModLibrary} />
          <Route path="/placeholder-gzdoom" component={PlaceholderGZDoom} />
          <Route path="/placeholder-zdl" component={PlaceholderZDL} />
          <Route path="/" exact>
            <h2>Welcome to the GZDoom Mod Manager</h2>
            <p>Select a feature from the menu.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
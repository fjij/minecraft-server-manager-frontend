import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ServerList from './ServerList';
import ServerView from './ServerView';
import CreateServerView from './CreateServerView';
import PresetList from './PresetList';
import PresetView from './PresetView';
import CreatePresetView from './CreatePresetView';
import BackupList from './BackupList';
import Nav from './Nav';
import '../styles/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <div className='AppBody'>
          <Route path='/backups' exact component={BackupList} />
          <Route path='/servers' exact component={ServerList} />
          <Route path='/server/:name' component={ServerView} />
          <Route path='/create-server' exact component={CreateServerView} />
          <Route path='/presets' exact component={PresetList} />
          <Route path='/preset/:name' component={PresetView} />
          <Route path='/create-preset' exact component={CreatePresetView} />
        </div>
      </Router>
    </div>
  );
}

export default App;

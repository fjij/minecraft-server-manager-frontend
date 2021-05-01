import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ServerList from './ServerList';
import ServerView from './ServerView';
import BackupList from './BackupList';
import CreateServerView from './CreateServerView';
import Nav from './Nav';
import '../styles/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <div className='AppBody'>
          <Route path='/servers' exact component={ServerList} />
          <Route path='/backups' exact component={BackupList} />
          <Route path='/server/:name' component={ServerView} />
          <Route path='/create-server' exact component={CreateServerView} />
        </div>
      </Router>
    </div>
  );
}

export default App;

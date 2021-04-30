import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ServerList from './ServerList';
import ServerView from './ServerView';
import BackupList from './BackupList';
import CreateServerView from './CreateServerView';
import Nav from './Nav';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Route path="/servers" exact component={ServerList} />
        <Route path="/backups" exact component={BackupList} />
        <Route path="/server/:name" component={ServerView} />
        <Route path="/create-server" exact component={CreateServerView} />
      </Router>
    </div>
  );
}

export default App;

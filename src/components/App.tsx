import React from 'react';
import ServerList from './ServerList';
import ServerView from './ServerView';
import CreateServerView from './CreateServerView';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path="/" exact component={ServerList} />
        <Route path="/server/:name" component={ServerView} />
        <Route path="/create_server" component={CreateServerView} />
      </Router>
    </div>
  );
}

export default App;

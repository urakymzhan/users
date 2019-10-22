import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from "./components/Menu";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

// users/3/posts
class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
        <Route path="/users/:userId/posts/:postId/comments">
            <Comments/>
          </Route>
          <Route path="/users/:userId/posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/">
            <div>Welcome to Home Page</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

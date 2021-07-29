import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import BookSearch from './components/BookSearch'
import MyBooks from './components/MyBooks'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/my-books">
            <MyBooks />
          </Route>
          
          <Route exact path="/search">
            <BookSearch />
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

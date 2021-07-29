import './App.css';
import Nav from './components/Nav'
import BookSearch from './components/BookSearch'
import MyBooks from './components/MyBooks'
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Route exact path="/">
        <Nav />
        <BookSearch />
      </Route>

      <Route exact path="/my-books">
        <Nav />
        <MyBooks />
      </Route>
      
      <Route exact path="/search">
        <Nav />
        <BookSearch />
      </Route>
    </Router>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404 page/NotFound';
import Doctors from './pages/Doctors page/Doctors/Doctors';
import Footer from './pages/Footer page/Footer/Footer';
import Home from './pages/Home page/Home/Home';
import Nav from './pages/Home page/Nav/Nav';
import Shop from './pages/Shop page/Shop/Shop';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

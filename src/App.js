import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import LogIn from './Log in page/LogIn';
import NotFound from './pages/404 page/NotFound';
import Doctors from './pages/Doctors page/Doctors/Doctors';
import Footer from './pages/Footer page/Footer/Footer';
import Home from './pages/Home page/Home/Home';
import Nav from './pages/Home page/Nav/Nav';
import ServiceDetail from './pages/Shared/serviceDetail/serviceDetail';
import Shop from './pages/Shop page/Shop/Shop';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register page/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/service-card/:cardId">
              <ServiceDetail />
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'
import Footer from './components/PageFooter'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={AboutPage} />
              <Route path='/Gallery' component={Gallery} />
              <Route path='/ContactUsPage' component={ContactUsPage} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

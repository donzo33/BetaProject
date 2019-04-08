import React, { Component } from 'react';
//import bootstrap
import { Navbar, Nav } from 'react-bootstrap/'
//App.css
import './styles/App.css';

//import our component 

import Home from './component/Home'
import Project from './component/Project'
import Contact from './component/Contact'

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (


      <Router>
        <div className="App">

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Donzo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/project">Mes projets</Nav.Link>
                <Nav.Link eventKey={2} href="/Contact">Contact</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>


          {/* Include css bootsrapt for the magic */}

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>


          {/* Define our Routes  */}


          <Route path="/" exact component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>

    );
  }
}

export default App;

import React, { useState} from 'react';
import './nav.css';
import {HashRouter, Link, Route} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap';


// Pages
import Home from '../Home/home';
import Footer from '../footer/footer';
function App() {
  const [name, setname] = useState(0);

  return (
    <div className="App">
     <HashRouter basename='/'>
     <Navbar className="navigation shadow-sm"  collapseOnSelect expand="md" bg="light" sticky='top' >
               <Link to='/'><Navbar.Brand></Navbar.Brand></Link>
               {/* <img src={Logo} height={60} alt='Vision Clothing' className='home-logo'/> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-toggle'/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                  
                  <Nav className="ml-auto navitems" defaultActiveKey="/">  
                  <Nav.Link href="#/" active>Home</Nav.Link>
                  </Nav>
                
                </Navbar.Collapse>
      </Navbar>

    <div>
      <Route exact path='/' component={Home}/>
    </div>

      </HashRouter>

      {/* Footer */}
      <Footer/>
    </div>
  );
}


export default App;

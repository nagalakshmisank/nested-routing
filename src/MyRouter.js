import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Careers from './component/Careers';
import Appointment from './component/Appointment';
import Call from './component/Call';
import Form from './component/Form';
import './sidebar.css'

//import './App.css';

class MyRouter extends Component {
  render() {
    return (
       <Router>
           <div className="wrapper">
              <div className='sidebar'>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
            </div>
           <Routes>
                <Route path='/' element={<Home />} />
                 <Route path='/Home' element={<Home />} />
                 <Route  path='/About' element={<About />} />
                  <Route  path='/Contact' element={<Contact />}>
          
                      <Route path='Careers' element={<Careers />} />
                      <Route path='Appointment' element={<Appointment />} />
                        <Route path='Appointment/call' element={<Call />} />
                        <Route path='Call' element={<Call />} />
                        <Route path='Appointment/Form' element={<Form />} />

                  </Route>

          </Routes>

          </div>  
       </Router>

   );
  }
}
  
export default MyRouter;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css'

function Contact(){
    return (
        <div style={{marginLeft:"250px", color:"red"}}>

    <address>
        <h2>Contact</h2>
        You can find us here:<br />
        Infotech<br />
        5th & 6th Floor, Royal Kapsons, A- 118, <br />
        Sector- 136, Madurai, Tamil Nadu (625023)
    </address><br /><br />
    <div className="content-wrap">

        <div className="product-nav mb-5">
            <p><Link to="/Contact/Careers" className="navbar-brand">Careers</Link>   </p>  
            <p><Link  to="/Contact/Appointment" className="navbar-brand">Appointment</Link></p>
            
        </div>
        
    </div>
       <Outlet />
</div>
    );
}

export default Contact;

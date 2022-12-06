import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

function Appointment(){
    return <div>
                <h1>Book Your Appointment Here</h1>
                <div className="product-nav mb-5">
                    <Link className="navbar-brand" to="/Contact/Appointment/Call">Make a call</Link>
                </div>
                <div className="product-nav mb-5">
                    <Link className="navbar-brand" to="/Contact/Appointment/Form">Fill the form</Link>
                </div>

                <Outlet />
            </div>
}
export default Appointment;

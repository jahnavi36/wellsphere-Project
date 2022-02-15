import React from 'react';
import AdminNavigation from './adminNavigation.js';
import { NavLink } from 'react-router-dom';
import './menu.css';
import logo from '../../images/WellSphere-small-2.svg';
import user from '../../images/user.png';


class AdminMenu extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container--menu">
                    <div className="logo--small">
                        <img src={logo} alt="WellSphere Logo"></img>
                    </div>
                    <AdminNavigation />
                    <div className="container--logout">
                        <div className="user--container">
                            <div>
                                <img className="user--img" src={user} alt="User Profile"></img>
                            </div>
                            <div>
                                <p className="user--type">Admin</p>
                            </div>
                        </div>
                        <NavLink className="navLink--logout" to="/">Logout</NavLink> {/* Change to proper logout function */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AdminMenu;
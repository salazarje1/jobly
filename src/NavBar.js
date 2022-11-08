import React, { useContext } from 'react'; 
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap'; 
import './NavBar.css'; 
import UserContext from './context/UserContext';

function NavBar({ logout }) {
    const { currUser } = useContext(UserContext);
    let show;
    let navSize;
    if(currUser){
        navSize = '50%';
        show = <span className='nav'>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/profile">{`${currUser.user.firstName}'s Profile`}</NavLink>
                    </NavItem>
                    <NavItem>
                        <a href="/" onClick={logout}>Logout</a>
                    </NavItem>
                </span>
    } else {
        navSize = '30%';
        show = <NavItem>
                    <NavLink className='nav-login' to="/login">Login</NavLink>
                </NavItem>
    }
    return (
        <div>
            <Navbar>
                <NavLink exact to="/" className={'navbar-logo'}>Jobly</NavLink>

                <Nav style={{width: navSize}}>
                    {show}
                    {/* <NavItem>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </NavItem> */}

                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar; 
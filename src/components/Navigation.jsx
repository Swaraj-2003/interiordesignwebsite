import React from 'react'
import '../components/Navigation.css';
import logoimg from '../images/logo.jpeg';
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
    <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
            <BsList />
        </label>
        <div className="logo">
            <Link to='/'><img src={logoimg} alt="logo" /></Link>
        </div>
        <ul className='nav-list-links'>
            <li><NavLink to='/' className="nav-link">Home </NavLink></li>
           
            {/* <li><NavLink to='/service' className="nav-link">Services </NavLink></li> */}
            <li><Dropdown className='services-drop'>
                {/* <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                    Services
                </Dropdown.Toggle> */}

                {/* <Dropdown.Menu>
                    <Dropdown.Item href="/allservice" className="nav-link drop-space">All Services </Dropdown.Item>
                    <Dropdown.Item href="/residencial" className="nav-link drop-space">Residential Interior </Dropdown.Item>
                    <Dropdown.Item href="/commercial" className="nav-link drop-space">Commercial Interior</Dropdown.Item>
                    <Dropdown.Item href="/modernfurniture" className="nav-link drop-space">Modern Furniture</Dropdown.Item>
                </Dropdown.Menu> */}
            </Dropdown></li>
            <li><NavLink to='/project' className="nav-link">Projects</NavLink></li>
            <Dropdown.Item href="/modernfurniture" className="nav-link drop-space">Modern Furniture</Dropdown.Item>
            <Dropdown.Item href="/projectdetailspage" className="nav-link drop-space">Project Details</Dropdown.Item>
            {/* <li><Dropdown className='services-drop'>
                <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                    More
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/projectdetailspage" className="nav-link drop-space">Project Details</Dropdown.Item>
                    <Dropdown.Item href="/gallery" className="nav-link drop-space">Gallery</Dropdown.Item>
                    <Dropdown.Item href="/privacypolicy" className="nav-link drop-space">Privacy Policy </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></li> */}
        </ul>
        <div className="getintouch-btn d-none d-lg-flex">
            <Link to='/contact' className='cont-btn'>Get In Touch </Link>
        </div>
    </nav>
</div>
  )
}

export default Navigation

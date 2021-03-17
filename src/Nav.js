import React, { useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Nav.css';

function Nav() {

const [show, handleShow] = useState(false);
const history = useHistory();

const transitionNavBar = () =>{ 
    if(window.scrollY > 100){
        handleShow(true);
    }else{
        handleShow(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo"
                onClick={() => history.push("/")}
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo"/>

                <div className="navLinks">
                    <Link className="linkNav" to="/">
                        <a className="nav_links" href="#">Home</a>
                    </Link>
                    <a className="nav_links" href="#">TV Shows</a>
                    <a className="nav_links" href="#">Movies</a>
                    <a className="nav_links" href="#">New & Popular</a>
                    <a className="nav_links" href="#">Watch Again</a>
                    <a className="nav_links" href="#">Reviews</a>
                </div>
                <div className="responsiveLinks">
                    <div className="browseButton">
                        <p>Browse</p>
                        <ArrowDropDownIcon />
                    </div>
                </div>
                <div className="navIconContainer">
                    <SearchIcon />
                    <p>KIDS</p>
                    <CardGiftcardIcon />
                    <NotificationsIcon />
                </div>
                
                <img className="nav_avatar"
                onClick={() => history.push("/profile")}
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix Logo"/>
            
            </div>
        </div> 
    );
}

export default Nav;

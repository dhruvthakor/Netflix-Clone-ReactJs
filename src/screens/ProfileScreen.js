import React,{ useState } from 'react';
import './ProfileScreen.css'
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import EditIcon from '@material-ui/icons/Edit';

function ProfileScreen() {

    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1 className="profileScreen_edit">Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
                
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <button 
                        onClick={() => auth.signOut()}
                        className="profileScreen_signout">Sign Out</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;

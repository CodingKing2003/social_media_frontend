import React from 'react'
import './profile.css';
import Navbar from '../../Component/Navbar/Navbar';
import ProfileLeftBar from '../../Component/ProfileLeftsidecontainer/ProfileLeftbar';
import ProfileRightbar from '../../Component/ProfileRightsideContainer/ProfileRightbar';

import ProfileMainPost from '../../Component/ProfileMainPostContainer/ProfileMainPost';

const Profile = () => {
  return (
    <div className='ProfileContainer'>
        <Navbar />
        <div className='subProfileContainer'>
            <ProfileLeftBar />
            <ProfileMainPost />
            <ProfileRightbar />

        </div>
    </div>
  )
}

export default Profile
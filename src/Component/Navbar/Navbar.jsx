import React from 'react'
import './Navbar.css';
import searchIcon from '../Images/search.png';
import Notification from '../Images/bell.png';
import Message from '../Images/message.png';
import Profileimage from '../Images/Profile.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='mainNavbar'>
        <div className='LogoContainer'>
            <p>Social</p>
        </div>
        <div>
            <div className='searchInputContainer'>
                <img src={`${searchIcon}`} className='searchIcon' alt="" />
                <input type="text" placeholder='search your friends' className='searchInput' />
            </div>
        </div>
        <div className='IconsContainer'>
            <img src={`${Notification}`} className='Icons' alt="" />
            <img src={`${Message}`} className='Icons' alt="" />
           <Link to={'/profile/G45ty8jhi34'}>
           <div style={{display:"flex",alignItems:"center"}}>
                <img src={`${Profileimage}`} className='ProfileImage' alt="" />
                <p style={{marginLeft:'5px'}}>Rajan</p>
            </div>
           </Link>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import './Home.css';
import Navbar from '../../Component/Navbar/Navbar';
import Leftbar from '../../Component/Leftsidecontainer/Leftbar';
import MainPost from '../../Component/MainPostContainer/MainPost';
import Rightbar from '../../Component/RightsideContainer/Rightbar';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="ComponentContainer">
          <Leftbar />
          <MainPost />
          <Rightbar />

        </div>
    </div>
  )
}

export default Home
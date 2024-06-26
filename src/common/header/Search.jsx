import React, { useState } from "react";
import logo from "../../components/assets/images/logo_2.png";
import { Link } from "react-router-dom";
import "./Search.css"; // Import file CSS untuk menyesuaikan styling tambahan

const Search = ({ CartItem }) => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    console.log("Logout berhasil");
  };

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <div className='profile-container'>
              <i className='fa fa-user icon-circle' onClick={toggleProfile}></i>
              {showProfile && (
                <div className='profile-dropdown'>
                  <div className='profile-menu'>
                    <Link to='/profile'>Profile</Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              )}
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

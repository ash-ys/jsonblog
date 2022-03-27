import React from 'react'
import { FaGamepad, FaHome,FaPeopleArrows,  FaSearch,  FaShoppingBag,  FaUser, FaVideo } from 'react-icons/fa'
import "../pages/Headerfacebook.css"

function Headerfacebook() {
  return (
      
    <div className='header'>
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="" />
        </div>
        <div className="header__input">
        
<FaSearch /> 
        </div>
        <div className="header__center">
        <div className="header__option">
            <FaHome fontSize={"large"}/>
        </div>
        <div className="header__option">
            <FaVideo fontSize={"large"}/>
        </div>
        <div className="header__option">
        <FaShoppingBag fontSize={"large"}/>
        </div>
        <div className="header__option">
        <FaPeopleArrows fontSize={"large"}/>
        </div>
        <div className="header__option">
        <FaGamepad fontSize={"large"}/>
        </div></div>
        <div className="header__right">
        <div className="header__info">
        <FaUser color='grey' />
        <h4>Ashish Wagle</h4>
        </div>

        </div>
    </div>
  )
}

export default Headerfacebook
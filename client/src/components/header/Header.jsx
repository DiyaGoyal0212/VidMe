import React from 'react'
import "./_header.scss";

import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications, MdApps} from "react-icons/md";

const Header = ({handleToggleSidebar}) => {
  return (
    <div className='border border-dark header'>
        <FaBars className='header-menu' size={25}
        //  onClick={() => handleToggleSidebar()}
        onClick={handleToggleSidebar}
        />

        <img src='images/logo.png' alt='logo' className='header-logo' />

        <form>
            <input type='text' placeholder='Search' />
            <button type='submit'>
                <AiOutlineSearch size={22} />
            </button>
        </form>

        <dic className="header-icons" >
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src='https://cdn3d.iconscout.com/3d/premium/thumb/student-boy-10974481-8779457.png' alt='' />
        </dic>
    </div>
  )
}

export default Header

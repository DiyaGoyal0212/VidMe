import React from 'react'
import "./_sidebar.scss";
import { MdSubscriptions, MdExitToApp, MdThumbUp, MdLibraryBooks, MdHome, MdSentimentDissatisfied, MdHistory } from 'react-icons/md';

const Sidebar = ({sidebar, handleToggleSidebar}) => {
  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"}
    onClick={()=> handleToggleSidebar(false)}>
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <hr/>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>i dont know</span>
      </li>
      <hr/>
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr/>
    </nav>
  )
}

export default Sidebar

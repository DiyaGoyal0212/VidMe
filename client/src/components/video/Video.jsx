import React from 'react'
import "./_video.scss";

import {AiFillEye} from 'react-icons/ai';

const Video = () => {
  return (
   <div className="video">
    <div className="video__top">
         <img  src="https://i.ytimg.com/vi/mIyIc6IWBzo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&amp;rs=AOn4CLAdY5fL-9arzaNV6K4JNSpjWR741A" alt=" " />
         
        <span>05.43s</span>
    </div>
    <div className="video__title">
      Create App in 5 Minutes
    </div>
    <div className="video__details">
      <span>
        <AiFillEye />5m Views •

      </span>
      <span>5 days ago</span>
    </div>
    <div className="video__channel">
    <img  src="https://yt3.ggpht.com/MGY4EgQ25O22uAATKN0dn2HFJwCZWeUtDNTyi3iv_7OySI5yC6TX-YcoIpJ7f5Eqa9AjppLS=s68-c-k-c0x00ffffff-no-rj" alt=" " />
    <p>Channel Name</p>
    </div>
   </div>
  )
}

export default Video

import React from 'react';
import homo_logo from './images/home_logo.svg';
import video_logo from './images/video.svg';
import liked_logo from './images/liked.svg';
import messenger_logo from './images/messenger.svg';
import navigation_photo from './images/navigation_photo.png';


export default function Header_rigth () {

    return (
    <div id='header_rigth'>
        <img src={homo_logo} id='homo_logo'/>
        <img src={video_logo} id='video_logo'/>
        <img src={liked_logo} id='liked_logo'/>
        <img src={messenger_logo} id='messenger_logo'/>
        <img src={navigation_photo} id='navigation_photo'/>
    </div>
    )
}



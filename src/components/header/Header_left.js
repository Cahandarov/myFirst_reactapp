import React from 'react';
import inst_logo from './images/instagram_logo.png';
import insta_text from './images/Instagram.png';

export default function Header_left() {

    return (
        <div id='header_left'>
            <img src={inst_logo} id='ints_logo' alt='insta_logo'/>
            <img src={insta_text} alt='insta_text'/>
        </div>
    )
}




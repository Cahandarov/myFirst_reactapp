import React from 'react';
import search_logo from "./images/search_logo.svg"


export default function Header_center() {
    return (
        <div id='header_center'>
            <img src={search_logo} id='search_logo' />
            <input type="search" id="search" name="search" placeholder='"Search Feed"' />
        </div>
    )
}



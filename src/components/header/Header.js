import React from 'react';
import Header_left from './Header_left';
import Header_center from './Header_center';
import Header_rigth from './Header_rigth';
import './header.css'




export default function Header () {
    return (
    <div id='header'>
        <Header_left/>
        <Header_center/>
        <Header_rigth/>
    </div>
    )
}





import React from 'react'
import Photo_box from './photo_box/Photo_box'
import Slider from './slider/Slider'
import './center.css';




export default function Center() {
    return (
        <div id='center'>
            <Slider/>
            <Photo_box/>
        </div>
    )
}

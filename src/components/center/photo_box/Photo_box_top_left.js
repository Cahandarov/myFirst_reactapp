import React from 'react';
import img from './images/IMG_profil.png';

export default function Photo_box_top_left() {
    return (
        <div id='Photo_box_top_left'>
            <img src={img} />
            <div className='flex_column'>
                <p className='text36203'>_murali_2601_</p>
                <p className='text16293'>Raja Raja Chola - Temple</p>
            </div>
        </div>
    )
}

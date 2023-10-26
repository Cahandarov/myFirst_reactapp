import React from 'react'

import Photo_box_top from './Photo_box_top'
import Photo_box_center from './Photo_box_center'
import Photo_box_bottom from './Photo_box_bottom'





export default function Photo_box() {
  return (
    <div id='photo_box'> 
    <Photo_box_top />
    <Photo_box_center/>
    <Photo_box_bottom />
    </div> 
  )
}

import React from 'react'
import liked_red from './images/liked_red.svg'
import comment from './images/comment.svg'
import share from './images/share.svg'
import save from './images/save.svg'

export default function Photo_box_bottom() {
  return (
    <div id='Photo_box_bottom'>
      <div id='Photo_box_bottom_row_1'>
        <div id='Photo_box_bottom_row_1_left'>
          <img src={liked_red} alt='liked_red' id='liked_red' />
          <img src={comment} alt='comment' id='comment' />
          <img src={share} alt='share' id='share' />
        </div>
        <img src={save} alt='save' id='save' />
      </div>
      <p> The temple is regarded as the foremost of all temples constructed in the medieval south Indian architectural style. During his </p>
    </div>
  )
}

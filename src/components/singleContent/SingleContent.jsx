import React from 'react'
import "./singleContent.css"
import { img_300 } from '../../config/config'

export default function SingleContent({
    id, poster, title, date, media_type, vote_average,
}) {
  return (
    <div>
        <img src={`${img_300}/${poster}`} alt="" />
    </div>
  )
}

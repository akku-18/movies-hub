import React from 'react'
import "../header/header.css"

export default function Header() {
  return (
    <div className='header' onClick={() =>window.scroll(0,0)}>Movies Hub</div>
  )
}

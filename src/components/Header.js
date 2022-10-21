import React from 'react'
import logo from './logo.png'
import './Header.css'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
export default function Header() {
  return (
    <>
      <div id='cont'>
        <div id="top">
          <img id="logo" src={logo} alt={"..."} />
          <header>News Daily</header>
        </div>
        <div id="date">
          {dayjs().format('LL')}{', '}{dayjs().format('LT')}{' IST'}
        </div>
      </div>
    </>
  )
}

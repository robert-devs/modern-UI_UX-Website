import React from 'react'
import{Rimenu3line,RiCloseLin} from 'react-icons/ri'

import logo from '../../assets/logo.svg'
import './navbar.css'
const navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo}alt="logo" />
        </div>
        <div className=' gpt3__navbar-links_container'>
          <p>
            <a href="#Home">Home</a>
          </p>
            <p>
            <a href="#Wgpt">What is GPT?</a>
          </p>
            <p>
            <a href="#Possibility">Open AI</a>
          </p>
            <p>
            <a href="#Features">Case Studies</a>
          </p>
            <p>
            <a href="#Blog"> Library</a>
          </p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
        </div>
        <div className='gpt3__navbar-menu'></div>

    </div>
  )
}

export default navbar
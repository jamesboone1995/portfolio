import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add('open')


    }

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove('open')
    }
    return (
        <div className='header'>
            <button className='header__hamburger' onClick={openMenu}>&#9776;
            </button>
            <img className='header__icon' src='https://d31u1j2vbx6ya5.cloudfront.net/gei-assets/uploads/2019/08/pro-headshots-photography-tips.jpg' alt='' />
            <div className="header__navBarDesktop">
                <Link to='/'><button className='header__button header__homeButton'>Home</button></Link>
                <Link to='/projects'><button className='header__button header__projectButton'>Projects</button></Link>
                <Link to='/resume'><button className='header__button header__resumeButton'>Resume</button></Link>
                <Link to='/contact'><button className='header__button header__contactButton'>Contact</button></Link>
            </div>

            <aside className="sidebar">
                <div className='sidebar__content'>
                    <h3 className='sidebar__title'> James Boone </h3>


                    <div className='sidebar__nav'>
                        <Link to='/'><button className='header__button header__homeButton'>Home</button></Link>
                        <Link to='/projects'><button className='header__button header__projectButton'>Projects</button></Link>
                        <Link to='/resume'><button className='header__button header__resumeButton'>Resume</button></Link>
                        <Link to='/contact'><button className='header__button header__contactButton'>Contact</button></Link>
                    </div>
                </div>
            </aside>

        </div >

    )
}

export default Header

'use client'
import AppLogo from './AppLogoDark'
import './uistyles.css'

function RegNavbar({ onShow } : {onShow: () => void}) {
    return (
        <header>
        <div className='reg-navbar'>
            <AppLogo />
            <nav id='nav-content'>
                <a href='#' className="reg-nav-link">Favourites</a>
                <button onClick={onShow}>Log in</button>
                <button onClick={onShow}>Sign Up</button>
                {/* <a href='#' className="reg-nav-link">Contact Us</a> */}
            </nav>
        </div>
        </header>
    )
}

export default RegNavbar
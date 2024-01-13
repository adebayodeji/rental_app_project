import AppLogo from './AppLogo'
import './uistyles.css'

function RegNavbar() {
    return (
        <header>
        <div className='reg-navbar'>
            <AppLogo />
            <nav id='nav-content'>
                <a href='#' className="reg-nav-link">Favourites</a>
                <a href='#' className="reg-nav-link">About Us</a>
                <a href='#' className="reg-nav-link">Contact Us</a>
            </nav>
        </div>
        </header>
    )
}

export default RegNavbar
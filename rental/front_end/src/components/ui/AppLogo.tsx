import './uistyles.css'
import appLogo from '../../assets/logo.svg'

function AppLogo() {
    return (
        <>
        <div className='logo-container'>
            <img src={appLogo} alt="App Logo" width="28" height="25"/>
            <h3 id='app-name-s'>R</h3>
            <h5 id='app-name'>ESTFULL</h5>
        </div>
        </>
    )
}

export default AppLogo
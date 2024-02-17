import './uistyles.css'
import appLogo from '../../../public/logo.svg'
import Image from 'next/image'

function AppLogo() {
    return (
        <>
        <div className='logo-container'>
            <Image src={appLogo} alt="App Logo" width="28" height="25"/>
            <h3 className='app-name-s' id='logo-light'>R</h3>
            <h5 className='app-name' id='logo-light'>ESTFULL</h5>
        </div>
        </>
    )
}

export default AppLogo
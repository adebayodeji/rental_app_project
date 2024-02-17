import React, { ReactElement } from 'react'
import ReactPortal from './ReactPortal';
import './modalstyles.css'

interface Props {
    children: ReactElement;
    handleClose: () => void;
}

function ModalBox( 
    { 
        children,
        handleClose 
    } : Props ) {
  return (
    <>
        {/* <div className='modal-shadow'> */}
            <div className='modal'>
                <button onClick={handleClose} className='close-btn'>
                    <span id="close">&times;</span>
                </button>
                <div className='modal-content'>{children}</div>
            </div>
        {/* </div> */}
    </>
    
    
  )
}

export default ModalBox
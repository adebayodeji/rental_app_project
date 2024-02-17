'use client'
import React, { useEffect } from 'react';
import './modalstyles.css'
import ReactPortal from './ReactPortal';
import ModalBox from './ModalBox';

interface ConfirmationModalProps {
    children: React.ReactElement;
    isOpen: boolean;
    handleClose: () => void;
}
function Modal({
    children,
    isOpen,
    handleClose
} : ConfirmationModalProps) {

    // Close modal key on escape Key press
    useEffect(() =>{
        const closeOnEscapeKey = (e: KeyboardEvent) => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose])

    // Disable scrolling effect when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen])
    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId='react-portal-modal'>

            <ModalBox handleClose={handleClose}>
                {children}
            </ModalBox>
        </ReactPortal>
        
    )
}

export default Modal

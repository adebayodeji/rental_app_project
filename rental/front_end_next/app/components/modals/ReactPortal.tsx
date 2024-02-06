import { createPortal } from "react-dom"
import { useState, useLayoutEffect } from 'react'

function createWrapper(modalId: string) {
    if (!document) return null
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute("id", modalId);
    document.body.appendChild(wrapperElement);
    
    return wrapperElement
}


function ReactPortal ( { 
    children, 
    wrapperId = "react-portal-wrapper"} : {
        children: React.ReactElement;
        wrapperId: string;
    } ) {
    
    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createWrapper(wrapperId);
        }
        setWrapperElement(element!);

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId]);

    if (!wrapperElement) return null;

    
    return (
        createPortal(children, wrapperElement)
    )
}

export default ReactPortal
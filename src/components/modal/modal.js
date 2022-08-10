import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal')

function Modal ({url, onClose}) {
    
    const hundleEscBtn = (e) => {
        if(e.code === 'Escape') {
            console.log('esc')
            onClose()
        }
    }

    useEffect (() => {
                window.addEventListener('keydown', hundleEscBtn)
            return () => {
                window.removeEventListener('keydown', hundleEscBtn )
            }
        }, []  
    )

    const hundleClickOverlay = (e) => {
        if(e.currentTarget === e.target) {
            onClose()
        }
    }

        return  createPortal(
            <div className="Overlay" onClick={hundleClickOverlay}>
                <div className="Modal">
                    <img src={url} alt="" />
                </div>
            </div>, modalRoot
            ) 
       
} 

export default Modal;
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
const Modal = ({ onClose, actionBar, children }) => {
    useEffect(() => {
        //This added because if Modal Page  is overflow then height of Modal Component doesn't match with Modal Page height
        document.body.classList.add("overflow-hidden");
        return () => { document.body.classList.remove('overflow-hidden'); }
    }, [])
    return ReactDOM.createPortal(<div>
        {/* Added 'fixed' instead absolute when Modal page and Click event (for Modal component) in the bottom of Modal Page */}
        <div className='fixed inset-0 bg-gray-300 opacity-80' onClick={onClose}></div>
        <div className='fixed  inset-40 bg-white p-10'>
            <div className='flex flex-col justify-between h-full'>{children}</div>
            <div className='flex justify-end'>{actionBar}</div>
        </div>
    </div>, document.querySelector(".modal-container"))
}

export default Modal
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Popup from 'reactjs-popup';
import FormEmailPopup from '../FormEmailPopup/FormEmailPopup';
import "./style.scss"
const PopupForm = ({ title }) => {
  return (
    <>
      <Popup
        trigger={
          <button 
            className="inline-block w-full sm:w-auto py-[18px] 2xl:py-[23px] px-[82px] 2xl:px-[100px] bg-[#333333] text-[14px] sm:text-[20px] 2xl:text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
          > 
            {title}
           </button>}
        modal
      >
        {close => (
          <div className="modal">
            <FormEmailPopup />
          </div>
        )}
      </Popup>
    </>
  )
}

export default PopupForm
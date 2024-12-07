/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`border border-[#AAA09A] py-[55px] pl-[49px] pr-[66px] rounded-[20px] cursor-pointer ${isOpen ? "bg-[#F8F8F8] animate-fadeIn" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="text-[32px] font-[400]">{question}</div>
          <div className="">{isOpen ? <FaMinus size={39} /> : <FaPlus size={39}/>}</div>
        </div>
        <div 
          className={`text-[18px] font-[400] transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`} 
          style={{ maxHeight: isOpen ? '10000px' : '0', opacity: isOpen ? '1' : '0', marginTop: isOpen ? '30px' : '0' }}
        >
          {answer}
        </div>
      </div>
    </>
  );
};

export default FAQItem;



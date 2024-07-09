import React, { useRef, useState } from "react";
import faq_data from "./FAQ_Accordion_Data";
import { RiArrowDropDownLine } from "react-icons/ri";

interface PropTypes {
  question: string,
  answer: string,
  isOpen: boolean,
  onClick: any
}

const AccordionItem = ({ question, answer, isOpen, onClick }:PropTypes) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  return (
    <div className="wrapper">
      <div className={`question-container ${isOpen ? "active" : ""}`} onClick={onClick}>
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </div>
      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen && contentHeight.current
            ? { height: contentHeight.current.scrollHeight }
            //? { height: "200px" }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

const FAQ_Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index:any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col justify-evenly h-full w-1/2 max-sm:w-3/4">
      {faq_data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQ_Accordion;
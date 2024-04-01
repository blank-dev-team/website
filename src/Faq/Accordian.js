import { useState } from "react";

import "./Accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    setSelected(i);
  };

  // const ArrowDownImg = <img src={ArrowDown} alt={ArrowDown}  alt="" />;

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item">
          <div
            className={selected === i ? "title" : "title-show"}
            onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span className={selected === i ? "arrow-left" : "arrow-down"}>
              &nbsp;
            </span>
          </div>
          <div className={selected === i ? "content-show" : "content"}>
            <div className="content-text-contain">
            {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    question: "How Does Blank Work?",
    answer:
      "The Blank Card works by linking and unlinking to your existing payment cards. When you make a purchase, you can choose which payment card to use by simply switching the identity of your Blank Card.",
  },
  {
    question: "Is the Blank Card secure?",
    answer:
      "Yes, the Blank Card is secure. It uses advanced encryption technology and has multiple layers of security to protect your financial information.",
  },
  {
    question: "What if I Lose my Blank Card?",
    answer:
      "If you lose your Blank Card, you can easily unlink all your mapped cards to it through the mobile app. You can then block the Blank Card through the app or by contacting our customer support.",
  },
  {
    question: "How long does it take to receive my Blank Card?",
    answer:
      "The delivery time for the Blank Card varies depending on your location. Please check the delivery estimates in the mobile app.",
  },
  {
    question: "Can I add my Blank Card to my digital wallet?",
    answer:
      "Yes, you can add your Blank Card to your digital wallet, such as Apple Pay or Google Pay.",
  },
];

export default Accordian;

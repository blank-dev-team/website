import { useState } from "react";
import ArrowDown from "../Images/arrow-down.svg";

import "./Accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const ArrowDownImg = <img src={ArrowDown}></img>;

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item">
          <div
            className={selected == i ? "title" : "title-show"}
            onClick={() => toggle(i)}
          >
            <h2>{item.question}</h2>
            <span className={"arrow-down"}>&nbsp;</span>
          </div>
          <div className={selected == i ? "content-show" : "content"}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    question: "How Does Blank Work",
    answer:
      "The Blank Card works by linking and unlinking to your existing payment cards. When you make a purchase, you can choose which payment card to use by simply switching the identity of your Blank Card.",
  },
  {
    question: "Is the Blank Card secure?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    question: "What if I Lose my Blank Card",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    question: "How long does it take to receive my Blank Card",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    question: "Can I add my Blank Card to my digital wallet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
];

export default Accordian;

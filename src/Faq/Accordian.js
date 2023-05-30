function Accordian() {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item">
          <div className="title">
            <h2>{item.question}</h2>
          </div>
          <div className="content">{item.answer}</div>
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

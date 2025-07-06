import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const accordionData = [
    {
      id: 1,
      title: "Accordion Item 1",
      content:
        "This is the content for accordion item 1.This is the content for accordion item 1.This is the content for accordion item 1.This is the content for accordion item 1.",
    },
    {
      id: 2,
      title: "Accordion Item 2",
      content: "This is the content for accordion item 2.",
    },
    {
      id: 3,
      title: "Accordion Item 3",
      content: "This is the content for accordion item 3.",
    },
    {
      id: 4,
      title: "Accordion Item 4",
      content: "This is the content for accordion item 4.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <div>
      <div className="accordion">
        {accordionData.map((item) => (
          <div key={item.id} className="accordion-item">
            <h2
              onClick={() => toggleAccordion(item.id)}
              className="accordion-title"
            >
              {item.title}
            </h2>

            <div
              className={`accordion-content ${
                isOpen === item.id ? "show" : ""
              }`}
            >
              <div>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

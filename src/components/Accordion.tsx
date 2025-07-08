import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const accordionData = [
    {
      id: 1,
      title: "Accordion Item 1",
      content:
        "This is the content for accordion item 1. This is the content for accordion item 1. This is the content for accordion item 1. This is the content for accordion item 1.",
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
    <div className="accordion">
      {accordionData.map((item) => (
        <div key={item.id} className="accordion-item border-b py-2">
          <h2
            onClick={() => toggleAccordion(item.id)}
            className="accordion-title cursor-pointer text-lg font-semibold"
          >
            {item.title}
          </h2>

          <AnimatePresence initial={false}>
            {isOpen === item.id && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-2">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

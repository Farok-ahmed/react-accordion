import { motion } from "framer-motion";
const TextMotion = () => {
  const message = "We are Enjoy Reactive Accelearator";
  const words = message.split(" ");
  return (
    <motion.div className="text-motion">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextMotion;

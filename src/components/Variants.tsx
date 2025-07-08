import { motion } from "framer-motion";
const shapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      delay: 0.5,
    },
  },
};

const Variants = () => {
  return (
    <motion.div>
      <motion.div
        className="shape"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
      >
        <h1>Welcome to Framer Motion</h1>
        <p>
          This is a simple example of using variants in Framer Motion to animate
          elements on the page.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Variants;

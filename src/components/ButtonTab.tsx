import { motion } from "motion/react";

const ButtonTab = () => {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.5 }}
        // whileHover={{
        //   scale: 1.1,
        //   rotate: 10,
        //   transition: { duration: 0.2 },
        // }}
        whileInView={{
          x: "50%",
          y: "50%",
          transition: { duration: 0.5 },
        }}
      >
        Tap Me
      </motion.button>
    </div>
  );
};

export default ButtonTab;

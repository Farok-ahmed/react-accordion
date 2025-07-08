import { motion } from "framer-motion";

const TransitionType = () => {
  return (
    <div className="transition-type-container">
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="transition-type"
      >
        <h1>Learning Animation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          possimus beatae reiciendis totam veritatis excepturi laudantium eius,
          ad voluptas dolorum unde illum, quisquam ab recusandae.
        </p>
      </motion.div>
      <motion.div
        className="transition-type"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <h1>Learning Animation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          possimus beatae reiciendis totam veritatis excepturi laudantium eius,
          ad voluptas dolorum unde illum, quisquam ab recusandae.
        </p>
      </motion.div>
      <motion.div
        className="transition-type"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, bounce: 0.5 }}
      >
        <h1>Learning Animation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          possimus beatae reiciendis totam veritatis excepturi laudantium eius,
          ad voluptas dolorum unde illum, quisquam ab recusandae.
        </p>
      </motion.div>
    </div>
  );
};

export default TransitionType;

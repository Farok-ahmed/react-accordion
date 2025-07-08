import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <motion.img
        src="https://img.freepik.com/premium-photo/bright-sunset-sun-rays-background-forest-forest-clearing_420001-10360.jpg"
        alt=""
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      />

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          asperiores veniam error omnis, commodi ea saepe repellat ex culpa
          praesentium eius. Dolor voluptatibus architecto nisi?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          asperiores veniam error omnis, commodi ea saepe repellat ex culpa
          praesentium eius. Dolor voluptatibus architecto nisi?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          asperiores veniam error omnis, commodi ea saepe repellat ex culpa
          praesentium eius. Dolor voluptatibus architecto nisi?
        </p>
      </motion.div>
    </div>
  );
};

export default About;

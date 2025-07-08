import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ImageHotspot = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="image-hotspot">
      <div
        className="pointer"
        onClick={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <img
        src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Landscape with hotspot"
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="hotspot"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="hotspot-content">
              <h3>Mountain View</h3>
              <p>
                Beautiful landscape with stunning mountain views and clear blue
                skies.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageHotspot;

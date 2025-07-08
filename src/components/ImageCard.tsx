import { motion } from "framer-motion";
const ImageCard = () => {
  return (
    <motion.div
      className="image-card"
      whileHover={{ scale: 1.05, rotate: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      drag
    >
      <img
        src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="
        alt=""
      />
      <div className="image-card-content">
        <h3>Green Tea Leaves</h3>
        <p>
          Discover the beauty of green tea leaves, known for their rich
          antioxidants and health benefits. Perfect for a refreshing drink or
          culinary use.
        </p>
      </div>
    </motion.div>
  );
};

export default ImageCard;

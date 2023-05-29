import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import {motion} from "framer-motion"
import cls from "classnames"

const Card = (props) => {
  const defaultImageUrl = "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  const { imgUrl = defaultImageUrl, size = "medium" } = props;
  const [imgSrc, setImgSrc] = React.useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  const {id} = props
  const handleError = () => {
    console.log("error occurred");
    setImgSrc(defaultImageUrl);
  };

  const scale = id === 0 ? {scaleY:1.1} : {scale:1.1}
  return (
    <div className={styles.container}>
      <motion.div className={cls(styles.imgMotionWrapper, classMap[size])}
      whileHover={{...scale}}
      >
        <Image
          src={imgSrc}
          alt="image"
          fill
          className={styles.cardImg}
          onError={handleError}
        ></Image>
      </motion.div>
    </div>
  );
};
export default Card;

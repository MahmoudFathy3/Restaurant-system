import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ img, title, discountPrice, price }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card_content}>
        <div className={styles.image}>
          <img src={img} alt="img" />
        </div>
        <div className={styles.info}>
          <h3>{title}</h3>
          <div className={styles.price}>
            <h4>السعر</h4>
            <p>
              {discountPrice ? <span>{price}</span> : <span></span>}
              {discountPrice ? discountPrice : price} دينار
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  discountPrice: PropTypes.number,
  price: PropTypes.number.isRequired,
};

export default Card;

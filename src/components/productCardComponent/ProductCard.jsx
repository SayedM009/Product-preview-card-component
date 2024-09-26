/* eslint-disable no-unused-vars */
import styles from "./ProductCard.module.css";
// import productIMGMobile from "../../assets/images/image-product-mobile.jpg";
import productIMGDesktop from "../../assets/images/image-product-desktop.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard() {
  return (
    <section className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={productIMGDesktop} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.productType}>perfume</span>
        <h1 className={styles.productName}>gabrielle essence eau de parfum</h1>
        <p className={styles.productDes}>
          A floral, solar and voluptuous interpretation composed by Oilvier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.prices}>
          <span className={styles.price}>$149.99</span>
          <span className={styles.discount}>$169.99</span>
        </div>
        <button className={styles.addToCard}>
          <AiOutlineShoppingCart />

          <span>Add to Card</span>
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

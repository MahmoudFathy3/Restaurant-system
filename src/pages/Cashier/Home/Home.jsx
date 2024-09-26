import styles from "./Home.module.css";
import Card from "@src/components/restaurant-system/Card/Card";
import Pizza from "@assets/image/images.jpg";

const Home = () => {
  return (
    <section>
      <div className={styles.home_content}>
        <div className={styles.content_wapper}>
          <div className={styles.wapperList}>
            <Card img={Pizza} title="بيتزا مشكل جبن" price={200} />
            <Card
              img={Pizza}
              title="بيتزا مشكل جبن"
              price={200}
              discountPrice={150}
            />
            <Card img={Pizza} title="بيتزا مشكل جبن" price={200} />
            <Card
              img={Pizza}
              title="بيتزا مشكل جبن"
              price={200}
              discountPrice={150}
            />
            <Card
              img={Pizza}
              title="بيتزا مشكل جبن"
              price={200}
              discountPrice={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

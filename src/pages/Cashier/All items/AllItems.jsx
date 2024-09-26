import styles from "./AllItems.module.css";
import Card from "@components/restaurant-system/Card/Card";
import Pizza from "@assets/image/images.jpg";

const AllItems = () => {
  return (
    <section>
      <div className={styles.AllItems}>
        <div className={styles.AllItems_content}>
          <h3>أطعمة شرقية</h3>
          <div className={styles.content_wapper}>
            <Card img={Pizza} title="بيتزا شرقي" price={200} />
            <Card
              img={Pizza}
              title="بيتزا شرقي"
              price={200}
              discountPrice={100}
            />
            <Card
              img={Pizza}
              title="بيتزا شرقي"
              price={200}
              discountPrice={100}
            />
            <Card img={Pizza} title="بيتزا شرقي" price={200} />
            <Card
              img={Pizza}
              title="بيتزا شرقي"
              price={200}
              discountPrice={100}
            />
            <Card
              img={Pizza}
              title="بيتزا شرقي"
              price={200}
              discountPrice={100}
            />
          </div>
        </div>
        <div className={styles.AllItems_content}>
          <h3>أطعمة غربية</h3>
          <div className={styles.content_wapper}>
            <Card img={Pizza} title="بيتزا مايجرينا" price={200} />
            <Card
              img={Pizza}
              title="بيتزا مشكل جبن"
              price={200}
              discountPrice={100}
            />
            <Card
              img={Pizza}
              title="بيتزا شرقي"
              price={200}
              discountPrice={100}
            />
            <Card img={Pizza} title="بيتزا مشكل جبن" price={200} />
            <Card
              img={Pizza}
              title="بيتزا مايجرينا"
              price={200}
              discountPrice={100}
            />
            <Card
              img={Pizza}
              title="بيتزا مشكل جبن"
              price={200}
              discountPrice={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllItems;

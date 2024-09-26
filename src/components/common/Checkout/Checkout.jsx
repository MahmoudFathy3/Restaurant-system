import { useState } from "react";
import styles from "./Checkout.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import Modals from "@components/restaurant-system/Modal/Modal";
import AddCustomer from "@components/forms/Add Customer/AddCustomer";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [addCustomer, setAddCustomer] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [product, setProduct] = useState(false);
  const [user, setUser] = useState("waiter");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log("Form Submitted");
  };

  return (
    <div className={styles.Checkout}>
      <div className={styles.Checkout_content}>
        <div className={styles.title}>
          <h3>رقم الفاتورة 105</h3>
          <AiOutlineDelete className={styles.icon} />
        </div>
        <div className={styles.List}>
          <div className={styles.item}>
            <Link to={"/tables"}>
              <button>الطاولات</button>
            </Link>
          </div>
          <div className={styles.item}>
            <button>صالة</button>
          </div>
          {user !== "waiter" && (
            <>
              <div className={styles.item}>
                <button>سفاري</button>
              </div>
              <div className={styles.item}>
                <button>دليفري</button>
              </div>
            </>
          )}
        </div>
        {product && <div className={styles.hr}></div>}

        {/* List Product */}
        <div className={styles.product}>
          <div className={styles.product_item}>
            <div className={styles.item}>
              <h4>السعر</h4>
              <p>150</p>
            </div>
            <div className={styles.item}>
              <h4>الخصم</h4>
              <p>20</p>
            </div>
            <div className={styles.item}>
              <h4>الكمية</h4>
              <p>1</p>
            </div>
            <div className={styles.item}>
              <h4>الاجمالي</h4>
              <p>130</p>
            </div>
            <div className={styles.item_name}>
              <h4>بيتزا مشكل جبن</h4>
              <AiOutlineDelete className={styles.item_icon} />
            </div>
          </div>
          <div className={styles.product_item}>
            <div className={styles.item}>
              <h4>السعر</h4>
              <p>150</p>
            </div>
            <div className={styles.item}>
              <h4>الخصم</h4>
              <p>20</p>
            </div>
            <div className={styles.item}>
              <h4>الكمية</h4>
              <p>1</p>
            </div>
            <div className={styles.item}>
              <h4>الاجمالي</h4>
              <p>130</p>
            </div>
            <div className={styles.item_name}>
              <h4>بيتزا سجق</h4>
              <AiOutlineDelete className={styles.item_icon} />
            </div>
          </div>
        </div>

        <div className={styles.total}>
          <div className={styles.total_wapper}>
            <p>اجمالي الطلب</p>
            <div className={styles.total_item}>
              <p>الخصم</p>
              <span>3</span>
            </div>
            <div className={styles.total_item}>
              <p>ضريبة القيمة المضافة</p>
              <span>14</span>
            </div>
            <div className={styles.total_item}>
              <p>لمكان</p>
              <span>cairo</span>
            </div>
            <div className={styles.total_item}>
              <p>الصافي</p>
              <span>331</span>
            </div>
            <div className={styles.total_item}>
              <p>رقم الطاولة</p>
              <span>10</span>
            </div>
          </div>
          <button>انشاء الطلب</button>
        </div>
      </div>

      {/* Modal for Coustomer  */}
      {user !== "waiter" && (
        <>
          <div className={styles.buttons}>
            <Link to="/customers">
              <button>العملاء</button>
            </Link>
            <button onClick={() => setAddCustomer(true)}>اضافة عميل</button>
          </div>

          <Modals open={addCustomer} handleClose={() => setAddCustomer(false)}>
            <AddCustomer
              onSubmit={onSubmit}
              handleClose={() => setAddCustomer(false)}
            />
          </Modals>
        </>
      )}
    </div>
  );
};

export default Checkout;

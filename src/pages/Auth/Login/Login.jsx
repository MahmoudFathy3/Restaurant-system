import styles from "./Login.module.css";
import imgLogin from "@assets/image/cashierLogin.png";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.overlay}></div>

      <div className={styles.Login_content}>
        <div className={styles.left}>
          <h3>سيستم مطعم</h3>
          <img src={imgLogin} alt="img-login" />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h3>تسجيل الدخول</h3>
          </div>
          <div className={styles.form}>
            <form method="POST">
              <div className={styles.formGroup}>
                <label htmlFor="username">الاسم</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="اسم المستخدم"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">كلمة السر</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="اسم المستخدم"
                  required
                />
              </div>
              <button type="submit">تسجيل الدخول</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

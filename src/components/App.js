import Navi from "./Navi";
import Footer from "./Footer";
import styles from "./App.module.css";

function App({ children }) {
  return (
    <>
      <Navi className={styles.nav} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;

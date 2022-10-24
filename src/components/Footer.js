import styles from "./Footer.module.css";
import Container from "./Container";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.links}>
          <li>PicOne</li>
          <li>대표 | 전종영 </li>
        </ul>
      </Container>
    </div>
  );
}

export default Footer;

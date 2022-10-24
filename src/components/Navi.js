import { Container, Nav } from "react-bootstrap";
import styles from "./Navi.module.css";

function Navi() {
  return (
    <div className={styles.nav}>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Gallery">Gallery</Nav.Link>
          <Nav.Link href="#">자유게시판</Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}

export default Navi;

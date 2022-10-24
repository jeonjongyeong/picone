import styles from "./HomePage.module.css";
import Container from "../components/Container";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function HomePage() {
  const [keyWord, setkeyWord] = useState("");

  const handleKeywordChange = (e) => {
    setkeyWord(e.target.value);
  };

  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <br />
            <strong>PicOne</strong>
          </h1>
          <p className={styles.description}>마음에 드는 사진을 선택하세요!</p>
          <form>
            <input
              name="keyword"
              value={keyWord}
              onChange={handleKeywordChange}
              placeholder="마음에 드는 사진을 검색하세요"
            ></input>
            <button type="submit">검색</button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default HomePage;

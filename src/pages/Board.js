import { useState } from "react";

function Board() {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form>
      <input value={title} onChange={handleTitleChange}></input>
    </form>
  );
}

export default Board;

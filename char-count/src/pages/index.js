import { useState } from "react";
export default function Home() {
  const [text, setText] = useState("");

  const Max_length = 100;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <textarea
        rows="10"
        cols="20"
        placeholder="Enter your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>Character count: {text.length}</div>
      {text.length > Max_length ? (
        <div style={{ color: "red" }}>Too many characters!</div>
      ) : null}
    </div>
  );
}

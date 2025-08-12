import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <textarea
        rows="10"
        cols="20"
        value={text}
        placeholder="Enter your text..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>Character count: {text.length}</div>

      <div>Word count: {text.trim().split(/\s+/).filter(Boolean).length}</div>

      {text.length > 200 && (
        <div style={{ color: "red" }}>Too many characters</div>
      )}
    </div>
  );
}

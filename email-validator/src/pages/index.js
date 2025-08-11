import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid = emailPattern.test(email);

  return (
    <form style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>Live Email Validator</h2>
      <label>
        Email:
        <input
          style={{ paddding: "5px", width: "250px" }}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      {email.length > 0 && (
        <p style={{ color: isValid ? "green" : "red" }}>
          {isValid ? "Valid email" : "Invalid email"}
        </p>
      )}
      <br />
      <button disabled={!isValid} style={{ padding: "5px 15px" }}>
        Submit
      </button>
    </form>
  );
}

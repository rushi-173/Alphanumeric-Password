import "./styles.css";
import { useState } from "react";

export default function App() {
  const [note, setNote] = useState("");
  const [pass, setPass] = useState("");
  function inputHandler(e) {
    setPass(e.target.value);
  }
  function validatePass() {
    if (/\d+/.test(pass)) {
      setNote("Password is Alphanumeric");
    } else {
      setNote("Password is not Alphanumeric");
    }
  }
  return (
    <div className="App">
      <label>Enter Pass : </label>
      <input type="text" onChange={inputHandler} />
      <br />
      <button onClick={validatePass}>Check</button>
      <h2>{note}</h2>
    </div>
  );
}

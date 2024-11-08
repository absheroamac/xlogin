import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLogined, setIsLogined] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "user" && password === "password") {
      setIsLogined(true);
    } else {
      setIsInvalid(true);
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {isInvalid && <p>Invalid username or password</p>}
      {isLogined && <p>Welcome, user!</p>}
      {!isLogined && (
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            required
          ></input>
          <br />

          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          ></input>
          <br />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;

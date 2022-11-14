import React, { useState } from "react";

const Login = ({ setC }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <button>log in</button>
        <button onClick={() => setC(true)}>
          Don't have an account? Register here.
        </button>
      </form>
    </div>
  );
};

export default Login;

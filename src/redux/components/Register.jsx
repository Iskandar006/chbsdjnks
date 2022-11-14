import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, pass);
  };
  return (
    <div>
      Register
      <form>
        <label htmlFor="username">username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name=""
          id=""
        />
        <button onClick={handleSubmit}>register</button>
        <button onClick={() => props.setCurrentForm(false)}>
          Already i have account
        </button>
      </form>
    </div>
  );
};

export default Register;

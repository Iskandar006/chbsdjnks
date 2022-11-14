import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const General = () => {
  const [currentForm, setCurrentForm] = useState(false);
  return (
    <div>
      {currentForm === false ? (
        <Login setC={setCurrentForm} />
      ) : (
        <Register setCurrentForm={setCurrentForm} />
      )}
    </div>
  );
};

export default General;

import React from "react";
import { useContext } from "react";
import { AppContext } from "./components/UserContext";

const Child = () => {
  // const {name,age}=user; 
  const userData=useContext(AppContext);
  console.log(userData);

  return (
    <div>
      Child = My name is  and my age is .{" "}
    </div>
  );
};

export default Child;
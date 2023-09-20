import React from "react";
import { useDataContext } from "./components/UserContext";

const Child = () => {
  // const {name,age}=user; 
  const userData=useDataContext();
  console.log(userData);

  return (
    <div>
      Child = My name is {userData.name}  and my age is{userData.age} .{" "}
    </div>
  );
};

export default Child;
import React from "react";

const AddUser = () => {
  return (
    <form>
      <div>
        <label htmlFor="username" >Username</label>
        <input id="username" type="text"></input>
      </div>
      <div>
        <label>Age</label>
        <input id="age" type="number"></input>
      </div>
    </form>
  );
};

export default AddUser;

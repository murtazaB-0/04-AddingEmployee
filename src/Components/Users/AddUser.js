import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      return 
    }
    if (+enteredAge <1){
      return 
    }
    setUsers((prevState) => [
      {
        name: enteredName,
        age: enteredAge,
      },
      ...prevState,
    ]);

    setEnteredName("");
    setEnteredAge("");

    event.preventDefault();
  };

  const userChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={userChangeHandler}
        ></input>
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

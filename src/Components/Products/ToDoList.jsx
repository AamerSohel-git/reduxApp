import React, { useState } from "react";
import "./ToDoList.css"
import { Button, TextField, Typography } from "@mui/material";
const ToDoList = () => {
  const [text, setText] = useState("")


  return (
    <div style={{ marginTop: "100px" }}>
      <Typography variant="h3">TODO </Typography>
      <TextField
        id="outlined-controlled"
        label="Todo description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <Button variant="contained" style={{ height: "54px" }}>Add Task</Button>
    </div>
  );
};

export default ToDoList;

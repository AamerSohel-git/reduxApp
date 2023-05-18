import React, { useState } from "react";
import "./ToDoList.css"
import { Button, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const ToDoList = () => {
  const [todo, setTodo] = useState({
    todo_desc: "",
    is_complete: false
  });
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos)

  const handleAdd = () => {
    if (!todo.todo_desc.trim()) return;
    dispatch({ type: "ADD_TODO", payload: [...todos, todo] })
    setTodo({ ...todo, todo_desc: "" })
  };

  const handleDeleteTask = (selectedTodo) => {
    dispatch({ type: "DELETE_TODO", payload: selectedTodo })
  };

  const handleCompleteTask = (selectedTodo) => {
    dispatch({ type: "COMPLETE_TODO", payload: selectedTodo })
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Typography variant="h3">TODO</Typography>
      <TextField
        id="outlined-controlled"
        label="Todo description"
        value={todo.todo_desc}
        onChange={(e) => setTodo({ ...todo, todo_desc: e.target.value })}
      />{" "}
      <Button variant="contained" style={{ height: "54px" }}
        onClick={handleAdd}
      >Add Task</Button>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Todo Description</StyledTableCell>

              <StyledTableCell align="right" component="th">Actions</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.todo_desc}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.is_complete ? (
                    <Button variant="contained" color="success">Completed</Button>
                  ) : (
                    <>
                      <Button variant="contained" onClick={() => handleDeleteTask(row)}>Delete</Button>{" "}
                      <Button variant="contained" onClick={() => handleCompleteTask(row)}>Complete</Button>
                    </>

                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ToDoList;

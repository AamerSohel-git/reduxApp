import React from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const counterVal = useSelector((state) => state.countReducer.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch({ type: "INC_COUNT", payload: counterVal})
    }
    const handleDecrement = () => {
        dispatch({ type: "DEC_COUNT", payload: counterVal})
    }
    return (
        <div style={{ marginTop: "100px" }}>
            <Typography variant="h3">Count:{counterVal} </Typography>
            <br />
            <Button variant="contained" color="success" onClick={() => handleIncrement()}>Increment</Button>&nbsp;
            <Button variant="contained" color="error" onClick={() => handleDecrement()}>Decrement</Button>
        </div>
    )
}

export default Counter

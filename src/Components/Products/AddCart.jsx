import { Typography, Grid, CardMedia, CardActions, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const AddCart = () => {
  const dispatch=useDispatch();
  const cartItem = useSelector((state) => state.rootReducer.cartProd);
  const handleDelete = (item) => {
    dispatch({type:"REMOVE_CART_ITEM", payload: item})
  }
  return (
    <div style={{ marginTop: "48px" }}>
      <Typography variant="h1">Cart Items</Typography>
      <Grid container spacing={3}>
        {cartItem?.length > 0 &&
          cartItem?.map((item, index) => {
            return (
              <Grid item xs={3}>
                <Card
                  style={{ backgroundColor: "lightpink", height: 480 }}
                  sx={{ maxWidth: 480 }}
                >
                  <CardMedia
                    sx={{ height: 200 }}
                    image={item.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Title:</strong> {item.title.substr(0, 20)}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Description:</strong>{" "}
                      {item.description.substr(0, 20)}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Category:</strong> {item.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Price:</strong> {item.price}$
                    </Typography>
                    <CardActions>
                      <Button variant="contained" color='error' onClick={()=>handleDelete(item)}>
                        Delete
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default AddCart;

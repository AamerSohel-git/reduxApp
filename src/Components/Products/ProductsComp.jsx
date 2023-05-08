import { Typography, Grid, CardMedia, Button, CardActions } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { formatedResult } from "../../Constants/Common";

const ProductsComp = () => {
  const [products, setProducts] = useState([]);
  const reduxProd = useSelector((state) => state.rootReducer.product);
  const cartItem = useSelector((state) => state.rootReducer.cartProd);

  const dispatch = useDispatch();
  const getProduct = async () => {
    if (reduxProd.length) {
      setProducts(reduxProd);
    } else {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(formatedResult(response.data));
      dispatch({ type: "ALL_PRODUCT", payload: formatedResult(response.data) });
    }
  };

  const getCategories = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    dispatch({ type: "ALL_CATEGORIES", payload: response.data });
  };

  const handleAddToCart = (item) => {
    const duplicate = cartItem.some((ele) => ele.id === item.id);
    if (duplicate) return;
    dispatch({ type: "ADD_TO_CART", payload: [...cartItem, item] })
  }

  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  return (
    <div style={{ marginTop: "48px" }}>
      <Typography variant="h1">Products</Typography>
      <Grid container spacing={3}>
        {products.length > 0 &&
          products.map((item, index) => {
            return (
              <Grid item xs={3}>
                <Card
                  style={{ backgroundColor: "lightpink", height: 360 }}
                  sx={{ maxWidth: 480 }}
                >
                  <CardMedia
                    sx={{ height: 200 }}
                    image={item.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Title:</strong> {item.title.substr(0, 30)}
                    </Typography>
                    <CardActions>
                      <Button variant="contained"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
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

export default ProductsComp;

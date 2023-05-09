import { Typography, CardMedia, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { formatedResult } from "../../Constants/Common";

const WomenCategory = () => {
  const womenProducts = useSelector((state) => state.rootReducer.womenProd);
  const dispatch = useDispatch();
  const [womenProd, setWomenProd] = useState([]);

  const getMenproduct = async () => {
    if (womenProducts.length) {
      setWomenProd(womenProducts);
    } else {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/women's clothing`
      );
      dispatch({ type: "WOMEN_PROD", payload: formatedResult(response.data) });
      setWomenProd(formatedResult(response.data));
    }
  };

  useEffect(() => {
    getMenproduct();
  }, []);
  return (
    <div style={{ marginTop: "48px" }}>
      <Typography variant="h1">Women</Typography>
      <Grid container spacing={3}>
        {womenProd.length > 0 &&
          womenProd.map((item, index) => {
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
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default WomenCategory;

import { Typography, CardMedia, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { formatedResult } from "../../Constants/Common";

const JeweleryCategory = () => {
  const jewelCategory = useSelector((state) => state.rootReducer.categories[1]);
  const jewelProducts = useSelector((state) => state.rootReducer.jewelProd);
  const dispatch = useDispatch();
  const [jewelProd, setJewelProd] = useState([]);

  const getJewelproduct = async () => {
    if (jewelProducts.length) {
      setJewelProd(jewelProducts);
    } else {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${jewelCategory}`
      );
      dispatch({ type: "JEWEL_PROD", payload: formatedResult(response.data) });
      setJewelProd(formatedResult(response.data));
    }
  };

  useEffect(() => {
    getJewelproduct();
  }, []);
  return (
    <div style={{ marginTop: "48px" }}>
      <Typography variant="h1">Jewelery</Typography>
      <Grid container spacing={3}>
        {jewelProd.length > 0 &&
          jewelProd.map((item, index) => {
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

export default JeweleryCategory;

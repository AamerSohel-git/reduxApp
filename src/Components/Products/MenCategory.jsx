import { Grid, Typography, CardMedia, CardActions, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { formatedResult } from "../../Constants/Common";

const MenCategory = () => {
  const menCategory = useSelector((state) => state.rootReducer.categories[2]);
  const menProducts = useSelector((state) => state.rootReducer.menProd);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menProd, setMenProd] = useState([]);

  const getMenproduct = async () => {
    if (menProducts.length) {
      setMenProd(menProducts);
    } else {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${menCategory}`
      );
      dispatch({ type: "MEN_PROD", payload: formatedResult(response.data) });
      setMenProd(formatedResult(response.data));
    }
  };

  const handleDetails = (prod) => {
    navigate("/details", { state: prod })
  }

  useEffect(() => {
    getMenproduct();
  }, []);
  return (
    <div style={{ marginTop: "48px" }}>
      <Typography variant="h1">Men</Typography>
      <Grid container spacing={3}>
        {menProd.length > 0 &&
          menProd.map((item, index) => {
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
                  <CardActions>
                    <Button variant="contained" onClick={() => handleDetails(item)}>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default MenCategory;

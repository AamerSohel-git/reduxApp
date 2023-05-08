import { Grid, Typography, CardMedia, CardActions, Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useLocation } from "react-router-dom";

const ProdDetails = () => {
//  const productData = useLocation();
//  console.log(productData)
    return (
        <div style={{ marginTop: "48px" }}>
            <Typography variant="h1">Details</Typography>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card
                        style={{ backgroundColor: "lightpink", height: 480 }}
                        sx={{ maxWidth: 480 }}
                    >
                        <CardMedia
                            sx={{ height: 200 }}
                            image={"No image"}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <strong>Title:</strong> 
                                {/* {item.title.substr(0, 20)} */}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                <strong>Description:</strong>{" "}
                                {/* {item.description.substr(0, 20)} */}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                <strong>Category:</strong> 
                                {/* {item.category} */}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                <strong>Price:</strong> 
                                {/* {item.price}$ */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained">Back</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProdDetails;

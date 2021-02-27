import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Add, AddShoppingCart, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: 20,
        flexGrow: 3,
        
    },
    media: {
        marginTop: 10,
        height: 140,
    },
}))


const Food = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.data)
    }, [props.data])

    return (<React.Fragment >

        {
          
          data ? data.map(food => (
           
                <Grid item key={food.id} justify="center"    className={classes.root}>
                    <Card  >
                        <CardActionArea>
                            <CardMedia
                                component="img"

                                className={classes.media}
                                alt="Contemplative Reptile"
                                height="100"
                                image={food.img.replace("#SIZEOFIMAGE#", "280x175")}
                                title="Contemplative Reptile"
                            />
                            <CardContent height="50">
                                <Typography gutterBottom variant="h6" component="h2">
                                    {food.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {food.ingredient}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                        <Grid container direction="row" alignItems="center"  justify="space-between" >
                            {food.count > 0 ?
                                <Grid container direction="row" alignItems="center"  justify="flex-start" style={{maxWidth: '100px'}} >
                                    <IconButton size="small" color="secondary" onClick={() => props.addFoodHandler(food.id)}>
                                        <Add />
                                    </IconButton>
                                    <Typography>
                                        {food.count}
                                    </Typography>
                                    <IconButton size="small" color="secondary" onClick={() => props.decFoodHandler(food.id)}>
                                        <Remove />
                                    </IconButton>
                                </Grid> : <Grid container style={{maxWidth: '100px'}}> <IconButton  size="small" color="secondary" onClick={() => props.addFoodHandler(food.id)}>
                                    <AddShoppingCart />
                                </IconButton>
                                
                                </Grid>
                            }
                            
                           <Typography   >
                              {food.price}  تومان 
                           </Typography>

                           </Grid>
                        </CardActions>
                    </Card>
                </Grid>
    
        )) : <div>موردی وجود ندارد </div>
        }

    </React.Fragment >)
}

export default Food;
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles({
    root: {

        marginTop: 10
    },
    media: {
        height: 140,
    },
});


const Food = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.data)
      
    }, [data])
  
    return (<div>

        {
            data.map(food => (
                <React.Fragment>
                    <Grid item key={food.id} justify="center" >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"

                                    className={classes.root}
                                    alt="Contemplative Reptile"
                                    height="60"
                                    image="https://static.delino.com/Image/Restaurant/Food/x5msgog4.sus_560x350.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        {food.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {food.ingredient}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" onClick={() => props.addFoodHandler(food.id)}>
                                    افزودن
                               </Button>
                                <Typography>
                                    تعداد: {food.count}
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </React.Fragment>
            ))

        }

    </div>)
}

export default Food;
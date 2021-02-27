import { Grid, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Food from './Food';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    padding: 10,
    direction: 'rtl'
  },
  grid:{
    padding: 10,
  },
  header:{
    marginTop:20,
  }
  
}));

const Foods = (props) => {
  const classes = useStyles();
  const [catFood, setCatFoods] = useState([])
  useEffect(() => {
    setCatFoods(props.data)
  }, [props.data])
  return (
    <div className={classes.root}  >
    
        {
          catFood.map(category => (
            <Grid container item className={classes.grid} direction="column">
              <Typography variant="h5" style={{marginTop:10}} className={classes.header}>    {category.categoryTitle}</Typography>
              <Grid container justify="flex-start" alignItems="center" xs={12} spacing={1} direction="row">
              <Food data={category.foods} addFoodHandler={props.addFoodHandler}  decFoodHandler ={props.decFoodHandler}/>
              </Grid>
            </Grid>
          ))
        }

    </div>
  );

}
export default Foods;
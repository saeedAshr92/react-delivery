import { Grid, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Food from './Food';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flexWrap',
    padding: 10,
    direction: 'rtl'
    
  },
  
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
            <React.Fragment>
              <Typography variant="h5" style={{marginTop:10}}>    {category.categoryTitle}</Typography>
              <Food data={category.foods} addFoodHandler={props.addFoodHandler}  decFoodHandler ={props.decFoodHandler} />
            </React.Fragment>
          ))
        }

    </div>
  );

}
export default Foods;
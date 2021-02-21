import { Grid, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Food from './Food';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flexWrap',
    padding: 10,
    direction: 'rtl'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Foods = (props) => {
  const classes = useStyles();
  const [catFood, setCatFoods] = useState([])
  useEffect(() => {
    setCatFoods(props.data)
    console.log(catFood)
  }, [catFood])
  return (
    <div className={classes.root} >
      <Grid direction="column" justify="center"  >

        {
          catFood.map(category => (
            <React.Fragment>
              <Typography variant="h5" >    {category.categoryTitle}</Typography>
              <Food data={category.foods}  addFoodHandler ={ props.addFoodHandler} />

            </React.Fragment>
          ))
        }


      </Grid>
    </div>
  );

}
export default Foods;
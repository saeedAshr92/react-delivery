import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Food from '../Food';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flexWrap',
        padding: 10,
        direction: 'rtl'

    },

}));


const CardPage = () => {
    const classes = useStyles();
    const [cardItems, setCardItems] = useState(JSON.parse(localStorage.getItem('cardItems')))
    useEffect(() => {
      
    }, [cardItems])

    const addFoodHandler= ()=>{

    }
    const decFoodHandler= ()=>{
        
    }
    return (
        <div className={classes.root}  >
            {
              
                    <Food data={cardItems} addFoodHandler={addFoodHandler}  decFoodHandler ={decFoodHandler}/>
               
            }
        </div>
    )
}

export default CardPage;
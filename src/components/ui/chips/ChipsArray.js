import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'right',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginTop: 1,
        direction:'rtl'
        
    },
    chip: {
        margin: theme.spacing(0.2),
        color: 'secondary'
    },
    
}));


const ChipsArray = (props) => {
    const classes = useStyles();
    const [chipsData, setChipsData] = useState([])
  
    useEffect(() => {
        setChipsData(props.chipsData)
    },[])
    return (
        
        <Grid className={classes.root} >
        {
            chipsData.map(data=>{
               
                return (
                    <li key={data.id}  item xs={2} >
                      <Chip clickable
                        onClick ={()=>{alert("clicked")}}
                        label={data.categoryTitle}
                      
                        
                        className={classes.chip}
                      />
                    </li>
                  );
            })
        }
      </Grid>
    )

}

export default ChipsArray;
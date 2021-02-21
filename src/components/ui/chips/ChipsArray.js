import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { Box, Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        direction:'rtl'
    },
    chip: {
        margin: theme.spacing(0.5),
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
        
        <Paper component="ul" className={classes.root} >
        {
            chipsData.map(data=>{
               
                return (
                    <li key={data.id}>
                      <Chip clickable
                        onClick ={()=>{alert("clicked")}}
                        label={data.categoryTitle}
                      
                        
                        className={classes.chip}
                      />
                    </li>
                  );
            })
        }
      </Paper>
    )

}

export default ChipsArray;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import ChipsArray from '../ui/chips/ChipsArray';
import { Card, CircularProgress, Grid, LinearProgress } from '@material-ui/core';
import Foods from '../Foods';

const HomePage = () => {


    const [categories, setCategories] = useState([])
    const [cardItems, setCardItems] = useState(JSON.parse(localStorage.getItem('cardItems')))
    const [isLoading, setIsLoading] = useState(true)

    const addFoodHandler = (id) => {
        categories.find(category => {
            const food = category.foods.find((food) => {
                return food.id === id;
            })
            if (food != undefined) {
                if (cardItems != null)
                    setCardItems(oldArray => [...oldArray, { id: food.id }])
                else {
                    setCardItems([{ id: food.id }])
                }
            }

        })

    }

    useEffect(() => {

        localStorage.setItem('cardItems', JSON.stringify(cardItems))
        if (categories != null) {
            console.log("not null")
        }
        const catFoods = categories.map(category => {
            let arrayFood = []
            category.foods.map(food => {
                let counter = 0;
                if (cardItems != null) {
                    for (const item of cardItems) {
                        if (item.id === food.id) counter++;
                    }
                }
                let foodObject = { id: food.id, title: food.title, img: food.img, ingredient: food.ingredient, count: counter }
                arrayFood.push(foodObject)
            })
            return { id: category.id, categoryTitle: category.title, foods: arrayFood }
        })

        setCategories(catFoods)

    }, [cardItems])

    useEffect(() => {
        console.log("cats updated")
        console.log(categories)

    }, [categories])

    useEffect(() => {
        console.log("home rendered")
        axios.get("https://api.delino.com/restaurant/menu/f601e9be-1974-4975-a876-bd7590c07e6d?_=1613896790839")
            .then(response => {
                const categories = response.data.categories.map(category => {
                    {
                        let arrayFood = []
                        category.sub.map((sub) => {
                            sub.food.map((food) => {
                                let counter = 0;
                                if (cardItems != null) {
                                    for (const item of cardItems) {
                                        if (item.id === food.id) counter++;
                                    }

                                }
                                let foodObject = { id: food.id, title: food.title, img: food.img, ingredient: food.ingredient, count: counter }
                                arrayFood.push(foodObject)
                            })
                        })
                        return { id: category.id, categoryTitle: category.title, foods: arrayFood }
                    }
                })
                setCategories(categories)
                setIsLoading(false)


            })
            .catch(error => {

                setIsLoading(false)
            })
    }, [])


    return (<React.Fragment>

        {
            isLoading ? <div> <LinearProgress color="secondary" /> </div> :
                <Grid container direction="column" justify="center"   >
                    <ChipsArray chipsData={categories} />
                    <Foods data={categories} addFoodHandler={addFoodHandler} />
                </Grid>
        }


    </React.Fragment>)






}
export default HomePage;
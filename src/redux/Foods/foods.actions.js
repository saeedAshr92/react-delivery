import { SETFOODS } from "./foods.types";

export const setFoods = (data) => ({
    type: SETFOODS,
    payload: data
});

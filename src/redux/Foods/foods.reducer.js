import {SETFOODS} from './foods.types';

const INITIAL_STATE ={
    foods : [],
};

const reducer =(state= INITIAL_STATE,action)=>{

    switch (action.type) {
        case SETFOODS:            
            return {
                 ...state,
                 foods:action.payload
                };
    
        default:
            return state;
    }
}
export default reducer;
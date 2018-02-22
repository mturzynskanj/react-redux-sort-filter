import {SET_FILTER, CLEAR_FILTER} from '../actionTypes'



export default  function filterReducer (state=false, action){
    const {type,filter} = action;

    switch(type){
        case SET_FILTER:{
            return filter;
        }
        case CLEAR_FILTER: {
            return false;
        }
    }
    return state; 
}
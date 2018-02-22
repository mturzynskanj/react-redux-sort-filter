import {SET_FILTER, CLEAR_FILTER} from '../actionTypes'

export const setFilter =(filter)=> {
    return {
        type: SET_FILTER,
        filter: filter
    }
};

export const clearFilter=() =>{
    return {
        type: CLEAR_FILTER,
        filter: ''
    }
}
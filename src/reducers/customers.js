import {GET_CUSTOMERS} from '../actionTypes'

export default function customerReducer(state=[],action){
    const {type} = action;
    if(type=== "GET_CUSTOMERS"){
        return [...state,...action.customers]
    }
    return state;
}
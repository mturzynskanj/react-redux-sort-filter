import { SORT_OPTIONS } from '../actionTypes'

export default function sortOptionsReducer (state=[], action){
    const {type, sortOptions} = action
    switch(type){
        case SORT_OPTIONS: {
            return [...state, ...sortOptions]
        }
        default:
        return state;
    }
    return state
}


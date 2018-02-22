import {SET_SORT, CLEAR_SORT} from '../actionTypes'

export const setSort =(sort) => {
    alert('dupa....'+ sort);
    return {
        type: SET_SORT,
        sort
    }
}


import {SET_SORT, CLEAR_SORT } from '../actionTypes'

export default function sortReducer(state='default', action) {
   const {type, sort } = action;
   switch (type){
        case SET_SORT: {
            return sort;
        }
   }
   return state
}
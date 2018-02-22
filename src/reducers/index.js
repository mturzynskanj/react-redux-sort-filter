import {combineReducers} from 'redux'

import customerReducer  from './customers'
import filterReducer from './filter'
import sortReducer from './sort'
import sortOptions from './sortOptions'

const appReducer = combineReducers({
    customers: customerReducer,
    sort: sortReducer,
    sortOptions: sortOptions,
    filter: filterReducer
});

export default appReducer
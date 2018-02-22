import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './Components/App';


import {createStore} from 'redux'


import appReducer  from "./reducers"
import getCustomers from './actions/customers'
import sortOptions from './actions/sortOptions'

let sortOptionsArray=['default', 'alpha-ascen','priority-ascen'];


let data = [
    {
    "name": "Joe",
    "age": 24,
    "priority": 1,
    "category": "cat2"
    },
    {
    "name": "Jane",
    "age": 76,
    "priority": 4,
    "category": "cat1"
    },
    {
    "name": "Kevin",
    "age": 32,
    "priority": 2,
    "category": "cat2"
    },
    {
    "name": "Lucy",
    "age": 54,
    "priority": 1,
    "category": "cat3"
    },
    {
    "name": "Colin",
    "age": 34,
    "priority": 3,
    "category": "cat1"
    },
    {
    "name": "Franny",
    "age": 36,
    "priority": 2,
    "category": "cat3"
    },
    {
    "name": "Neil",
    "age": 74,
    "priority": 4,
    "category":"cat2"
    },
    {
    "name": "Katy",
    "age": 55,
    "priority": 3,
    "category":"cat2"
    }
];

let store = createStore(appReducer);

//console.log('the store is ', store.getState());

store.dispatch(getCustomers(data));
store.dispatch(sortOptions(sortOptionsArray))

/console.log('the store is ', store.getState());

//console.log(store.getState().customers);








console.log('customers....' , store.getState().customers.length);

ReactDOM.render(<App  store = {store} />, document.getElementById('root'));



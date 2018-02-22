import {GET_CUSTOMERS} from '../actionTypes'

const getCustomers = (customers)=>{
    return {
        type: GET_CUSTOMERS,
        customers: customers
    }
}

export default getCustomers
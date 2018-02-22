
import { connect } from 'react-redux'
import Customers from '../Components/Customers'



const mapStateToProps = (state, props) => {

    let immutibleSort = (arr, compareCondition) => {
        let sortedArray = [];
        compareCondition === "priority-ascen"
            ? sortedArray = [...arr].sort((cust1, cust2) => { return cust1.priority > cust2.priority ? 1 : -1; })
            : compareCondition === 'alpha-ascen'
                ? sortedArray = [...arr].sort((cust1, cust2) => { return cust1.name > cust2.name ? 1 : -1; })
                : arr
        return sortedArray
    }

    let filteredCustomers = state.filter
        ? state.customers.filter(customer => customer.category === state.filter)
        : state.customers

    let sortedCustomers = state.sort !== 'default'
        ? immutibleSort(filteredCustomers, state.sort)
        : filteredCustomers


    return {
        customers: sortedCustomers
    }
}

const ConnectedCustomerList = connect(mapStateToProps)(Customers)

export default ConnectedCustomerList

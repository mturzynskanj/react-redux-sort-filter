import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Filters from '../Components/Filters.jsx'

import { setFilter, clearFilter } from '../actions'

const mapStateToPros = (state, props) => {

    const categories = state.customers.reduce((acc, customer) => {
        if (!acc.includes(customer.category)) {
            return [...acc, customer.category]
        }
        return acc
    }, [])
    return { categories }
}


const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ setFilter, clearFilter }, dispatch)

const ConnectedFilters = connect(mapStateToPros, mapDispatchToProps)(Filters)

export default ConnectedFilters
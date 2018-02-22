
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import SortOptions from '../Components/SortOptions.jsx'

import {setSort} from '../actions'

const mapStateToProps = (state, props) => {
    let sortOptions = state.sortOptions;
    let sort = state.sort
    console.log('sort ofpiton', state.sortOptions, sort);
    return {sortOptions, sort}
}

const mapDispatchToProps = (dispatch,props) => 
    bindActionCreators({setSort},dispatch)

const ConnectedSortOptions = connect(mapStateToProps, mapDispatchToProps )(SortOptions);

export default ConnectedSortOptions


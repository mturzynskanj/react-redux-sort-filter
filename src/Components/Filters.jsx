
import React from 'react'
import Filter from './Filter.jsx'

const Filters = ({categories, setFilter, clearFilter}) =>
    <span>
        {
            categories.map((category,index)=>(
                <Filter key={index} name={category} onClick={()=> setFilter(category)} />
            ))
        }
        <input type='radio' name='filter' value='All categories' onClick={clearFilter} /> All Categories
    </span>

export default Filters
import React from 'react'


const Customer = ({name, category, priority}) => {
    return (
        <li>
        {name} ---- {category}---{priority}
    </li>
    )   
}

export default Customer

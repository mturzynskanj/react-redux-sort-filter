import React from 'react'
import Customer from './Customer.jsx'

const Customers = ({customers}) => (
    <ul>
        {
        customers.map((customer, index)=> {          
            return <Customer key={index}  {...customer} />
        })
        }
    </ul>
)

export default Customers


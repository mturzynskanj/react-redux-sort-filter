
import React from 'react'

const Filter = ({name, onClick}) => (
    <div>
        <input type="radio" value={name} name='filter' onClick={onClick} />{name}
    </div>
)


export default Filter
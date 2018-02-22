import React from 'react'


const OptionItem = ({value, onChange}) => {
    return(
        <option value = {value}  >
            {value}
        </option>
    )
        
}


const SortOptions = ({sortOptions, setSort }) => (
    <div>
        <select onChange={(event)=>setSort(event.target.value)}>
            {
                sortOptions.map((opt,idx)=> (
                    <OptionItem key={idx} value={opt} className="test" />
                ))
            }
        </select>
    </div>
)

export default SortOptions
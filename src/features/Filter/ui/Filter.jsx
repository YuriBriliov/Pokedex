import React, { useState, useEffect } from 'react';

const Filter = ({filter, fortByName, sortBySelect}) => {
  const [sortName, setSortName] = useState('')

  const getFIlterData = (event) =>{
    return sortBySelect(event.target.value)
  }

  const setName = (event) =>{
    setSortName(event.target.value)
    return fortByName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1))
  }
  return (
    <form>
      <select onChange={getFIlterData}>
        <option value='Default'>Default</option>
        {filter?.map((item)=>{
          return(
            <option value={item} key={item}>
              {item}
            </option>
          )
        })}
      </select>
      <input value={sortName} onChange={setName} placeholder='Sort by name...'/>
    </form>
  );
};

export default Filter;
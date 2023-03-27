import React, { useState, useEffect } from 'react';
import ListElements from '../../../entities/ListElements/ui/ListElements';
import Filter from '../../../features/Filter/ui/Filter';


const Main = ({elements}) => {

  const [ filteredData, setFilteredData ] = useState(elements)
  const [filterOptions, setFilterElements] = useState([])


  // Prepeated elements for filter options
  useEffect(()=>{
    setFilteredData(elements)
    const filter = [...new Set(elements?.map((item)=>{
      return item?.type
    }).flat(Infinity))]
    setFilterElements(filter)
  },[elements])

  // function filter by name
  const nameSort = (arg) =>{
    if(arg.length){
      let searchWord = arg
      const result = filteredData?.filter((item)=>{
        if(item?.name?.english.includes(searchWord)){
          return item?.name?.english.includes(arg)
        }
      })
      setFilteredData(result)
    }else{
      setFilteredData(elements)
    }
  }

  // function filter ty type
  const typeSort = (arg) =>{
    if(arg === 'Default'){
      setFilteredData(elements)
    } else {
      const result = elements.filter((item)=>{
        return item?.type.includes(arg)
      })
      setFilteredData(result)
    }
  }

  return (
    <div>
        <Filter filter={filterOptions} fortByName={nameSort} sortBySelect={typeSort} />

        {elements.length ? <ListElements elements={filteredData}/> : <div>...loading</div>}
     </div>
  );
};

export default Main;
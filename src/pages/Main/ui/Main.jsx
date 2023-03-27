import React from 'react';
import ListElements from '../../../entities/ListElements/ui/ListElements';


const Main = ({elements}) => {

  console.log(elements)

  return (
    <div>
        {elements.length ? <ListElements elements={elements}/> : <div>...loading</div>}
     </div>
  );
};

export default Main;
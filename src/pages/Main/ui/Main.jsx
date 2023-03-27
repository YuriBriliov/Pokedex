import React, { useState, useEffect } from 'react';
import ListElements from '../../../entities/ListElements/ui/ListElements';


const Main = ({elements}) => {

  return (
    <div>

        {elements.length ? <ListElements elements={elements}/> : <div>...loading</div>}
     </div>
  );
};

export default Main;
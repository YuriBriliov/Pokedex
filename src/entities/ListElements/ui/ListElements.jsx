import React from 'react';
import { Link } from 'react-router-dom';
import Element from '../../Element/ui/Element';
import styles from '../style/ListElements.module.css'


const ListElements = ({ elements }) => {
  
  return (
    <>
      {elements.length && <div className={styles.card_list_container}>
        {elements.map((item)=>{
          return(
            <Link key={item?.id} to={`/${item?.id}`}>
              <Element elem={item} />
            </Link>
          )
        })}
      </div>}
    </>
  );
};

export default ListElements;
import React from 'react';
import styles from '../style/Element.module.css'

const Element = ({elem}) => {
  const imagePath = require(`../../../data/images/${elem.image}`);

  return (
    <div className={styles.card_list_element}>
      <div>
        <img src={imagePath} className={styles.card_list_image} alt="img" />
      </div>
      <div>
        Name: {elem?.name?.english}
      </div>
      <div>
        Type: {elem?.type?.map((item, index)=>index === elem?.type?.length - 1 ? item +'' : item +', ')}
      </div>
    </div>
  );
};

export default Element;
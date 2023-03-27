import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../style/DetailPage.module.css'

const DetailPage = ({ detailList }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [image, setImage] = useState()
  const [currentElem, setCurrentElem] = useState({})


  useEffect(()=>{
    if(id){
      const element = detailList?.filter((item)=>{
        return Number(item?.id) === Number(id)
      })
      setImage(require(`../../../data/images/${element[0]?.image}`))
      setCurrentElem(element[0])
    }
  },[id, detailList])

  const ListBack = () =>{
    navigate('/')
  }

  console.log(currentElem)
  return (
    <>
      <div>
      <button onClick={ListBack} className={styles.button_back}>
        Back
      </button>
        <div className={styles.profile_container}>
          <div className={styles.left_side}>
            <div className={styles.image_block}>
              <img className={styles.avatar} src={image} alt="image"/>
            </div>
          </div>
          <div className={styles.right_side}>
            <div className={styles.right_side_info}>
              <div className={styles.marginText}>Name: {currentElem?.name?.english}</div>
              <div className={styles.marginText}>Type: {currentElem?.type?.map((item, index)=>index === currentElem?.type?.length - 1 ? item +'' : item +', ')}</div>
              <div className={styles.marginText}>Attack: {currentElem?.base?.['Attack']}</div>
              <div className={styles.marginText}>Defense: {currentElem?.base?.['Defense']}</div>
              <div className={styles.marginText}>HP: {currentElem?.base?.['HP']}</div>
              <div className={styles.marginText}>Sp. Attack: {currentElem?.base?.['Sp. Attack']}</div>
              <div className={styles.marginText}>Sp. Defense: {currentElem?.base?.['Sp. Defense']}</div>
              <div className={styles.marginText}>Speed: {currentElem?.base?.['Speed']}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
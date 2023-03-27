import { useEffect, useState } from 'react'
// import { Header } from "../entities/Header";
import './index.css'
import data from '../data/pokedex.json'

function App() {

  const [baseData, setBaseData] = useState([])

  const imagesContext = require.context('../data/images', false, /\.(png|jpe?g|svg)$/);
  const imageFilenames = imagesContext.keys().map(key => key.split('/').pop());

useEffect(()=>{
  if(data.length){
    const newData = data.map((item, index) => {
     return {...item, image: imageFilenames[index]}
    })
    setBaseData(newData)
  }
},[])

useEffect(()=>{
  if(baseData){
    console.log(baseData)
  }
},[baseData])


  return (
    <div className="App">
      {/* <Header /> */}
      Hello
    </div>
  );
}

export default App;

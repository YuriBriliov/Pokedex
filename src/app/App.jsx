import { useEffect, useState } from 'react'
import { Header } from "../entities/Header";
import './index.css'
import data from '../data/pokedex.json'
import AppRouter from './providers/router/ui/AppRouter';

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


  return (
    <div className="App">
      <Header />
      <AppRouter baseData={baseData} />
    </div>
  );
}

export default App;

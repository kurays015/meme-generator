import { useState, useEffect } from 'react'
import RandomMeme from './components/RandomMeme';


function App() {

  const [getMemesData, setGetMemesData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const memesData = await response.json();
        const memesArray = memesData.data.memes;
        
        //pass fetch url data to setGetMemesData
        setGetMemesData(memesArray)

      } catch(error) {
        console.log(error)
      }
    }

    getData();
  }, []);

  return (
    <>
      {getMemesData && <RandomMeme getMemesData={getMemesData} />}     
    </>
  )
}

export default App

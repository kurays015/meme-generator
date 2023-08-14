import { useState, useEffect } from 'react'
import  API_URL  from './apiURL';
import RandomMeme from './components/RandomMeme';


function App() {

  const [getMemesData, setGetMemesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const memesData = await response.json();
        const memesArray = memesData.data.memes;
        
        //pass fetch url data to setGetMemesData
        setGetMemesData(memesArray)

      } catch(error) {
        setError(error, 'An error occurred while fetching data');
      }
    }

    getData();
  }, []);

  return (
    <>
      {error ? <div>{error}</div> : getMemesData && <RandomMeme getMemesData={getMemesData} />}     
    </>
  )
}

export default App

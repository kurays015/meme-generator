import { useState } from "react";

const RandomMeme = ({getMemesData}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [getRandomMeme, setGetRandomMeme] = useState(null);

  const handleClick = () => {
    //show loading
    setIsLoading(true)

    setTimeout(() => {
      //get random meme using Math.random()
      const randomNumber = Math.floor(Math.random() * getMemesData.length);
      const randomMeme = getMemesData[randomNumber].url;

      //pass the random meme to the set function ( setGetRandomMeme() )
      setGetRandomMeme(randomMeme)
      //hide loading
      setIsLoading(false)
    }, 500)

  }

  return ( 
    <div className="meme--container">
      <div>
        <h1 className="meme--title">Meme Generator!</h1>
        {isLoading ? <div className="meme--loading">Loading...</div> : getRandomMeme && <img className="meme--img" src={getRandomMeme} />}
      </div>
      <button className="meme--button" onClick={handleClick}>Get Random Meme</button>
    </div>
  );
}
 
export default RandomMeme;
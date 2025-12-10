import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'lTPykHIx3O5a38eTPBZ4ovQ89JRHmpxd';

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.appendChild(imgElement);
}

const getRandomGifUrl = async (): Promise<string> => {

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
  );

  const { data }: GiphyRandomResponse = await response.json();


  return data.images.original.url;


}

getRandomGifUrl().then(createImageInsideDOM);
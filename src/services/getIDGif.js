const ApiKey = 'OvaklIMhz6vPRzjlJVj232acCC0pyPcG';


const fromApiResponseToGifs = apiResponse => {
    
    const {data} = apiResponse;
    const {images, title, id, import_datetime} =  data;
    const {url} = images.downsized_medium;
    return{
        id,
        title,
        url,
        Fecha: import_datetime
    }

}

export default function getIDGif({id})
{

    const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${ApiKey}`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
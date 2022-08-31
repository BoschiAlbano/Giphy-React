const ApiKey = 'OvaklIMhz6vPRzjlJVj232acCC0pyPcG&q';

export default function getGifs({limit = 20,  keyword = 'random', page = 0} = {})
{
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`


    return fetch(apiURL)
    .then(res => res.json())
    .then(datos => {
        const {data} = datos;
        if (Array.isArray(data)) {
            const Gifs = data.map(Url =>
                {
                    const {images, title, id} =  Url;
                    const {url} = images.downsized_medium;
                    return {id, title, url};
                });
            return Gifs
        }
    })
}
const ApiKey = 'OvaklIMhz6vPRzjlJVj232acCC0pyPcG';

export default function getIDGif({id = 'd6OqY1T6goD6M'} = {})
{

    const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${ApiKey}`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(datos => {
        const {data} = datos;
        const {images, title, id, import_datetime} =  data;
        const {url} = images.downsized_medium;
        const _Gif = {
            Id: id,
            Titulo: title,
            Imagen: url,
            Fecha: import_datetime
        }
        return _Gif
    })
}
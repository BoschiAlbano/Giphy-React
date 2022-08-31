const ApiKey = 'OvaklIMhz6vPRzjlJVj232acCC0pyPcG&q';

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    return data
}

export default function getTrendingTerms(){
    const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${ApiKey}`

    return fetch(apiURL)
    .then(res => res.json()).then(fromApiResponseToGifs)
}

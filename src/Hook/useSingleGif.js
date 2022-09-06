import { useEffect, useState } from 'react';
import useGlobalGifs from '../Hook/UseGlobalGif'
import getIDGif from '../services/getIDGif'

function useSingleGif({id}){
    
    // Contexto
    const gifs = useGlobalGifs();
    //const {gifs} = useGifs();
    const gifFromCache = gifs.find(gif => gif.id === id)
    
    // Api single Gif
    const [gif, SetGif] = useState(gifFromCache);
    const [isloading, setIsLoading] = useState(true)

    useEffect(function(){
        console.log("UseEffect")
        
        if (!gif) {
            console.log("Api")
            getIDGif({id})
            .then(res => {
                SetGif(res)
                setIsLoading(false)
            })
            
        }else{setIsLoading(false)}
    }, [gif, id])

    return {gif,isloading};
}

export default useSingleGif
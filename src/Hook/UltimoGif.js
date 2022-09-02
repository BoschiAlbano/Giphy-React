import { useEffect, useContext, useState } from "react";
import getGifs from '../services/getGifs';
import GifsContext from '../Context/GifsContext'

const Initial_page = 0;

function PalabraClave (keyword) {
    
    var getKeyword;

    if (keyword == null) {
        if (localStorage.getItem('lastKeyword') != null) {
            getKeyword = localStorage.getItem('lastKeyword');
        }else{
            console.log("Random");
            getKeyword = 'random'
        }
    }else{
        getKeyword = keyword
        // Guardamos la palabra clave
        localStorage.setItem('lastKeyword', getKeyword)
    }

    
    return getKeyword
}

export function useGifs({keyword} = {keyword: null}, {limit} = {limit: 10})
{
    const {gifs, setgifs} = useContext(GifsContext)
    const [page , setPage] = useState(Initial_page)
    const [loading, setLoading] = useState(false);

    useEffect(function()
    {
        setLoading(true)
        // Obtenemos la palabra clave
        var getKeyword = PalabraClave(keyword);

        getGifs({keyword: getKeyword, limit})
        .then(Allgifs => {
            setgifs(Allgifs);
            setLoading(false)
        });
    }, [keyword, setgifs]);


    useEffect(function(){

        setLoading(true)

        var getKeyword = PalabraClave(keyword);

        if (page == Initial_page) {
            return;
        }
        
        getGifs({keyword: getKeyword, page, limit})
        .then(result => {
            setgifs(anteriores => anteriores.concat(result))
            setLoading(false)
        })
    }, [keyword, page, setgifs])


    return {gifs, setPage, loading}
}

const Initial_page_home = 0;

export function useGifsHome({keyword} = {keyword: null}){

    const [loading, setLoading] = useState(true);
    const [page , setPage] = useState(Initial_page_home)
    const {gifs, setgifs} = useContext(GifsContext)

    useEffect(function(){

        var getKeyword = PalabraClave(keyword);
        
        getGifs({keyword: getKeyword, page})
        .then(result => {
            setgifs(result)
            setLoading(false)
        })
    }, [keyword, page, setgifs])

    return {gifs, setPage, loading}
}
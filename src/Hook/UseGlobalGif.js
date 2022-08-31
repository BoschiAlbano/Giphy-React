import { useContext } from "react";
import GifsContext from '../Context/GifsContext';

export default function useGlobalGifs()
{
    return useContext(GifsContext).gifs;
}
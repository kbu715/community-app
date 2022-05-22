import axios from 'axios';
import useSWR from 'swr';

export const fetcher = async function( url ) {
    return await axios.get( url ).then( response => response.data )
}

export default function useFetch( url ) {
    return useSWR( url, fetcher );
}
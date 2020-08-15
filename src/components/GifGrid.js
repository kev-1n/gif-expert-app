import React from 'react'
import { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);
    useEffect( () => {
        getGif();
    }, [])

    const getGif = async() => {

        const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=iW5QfwJ0A6ls3GuJOMMR9OcXegJ6d03T`
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {

                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }
        })

       
        setimages( gifs );

    }
    

    

    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                    
                    
                    {
                        images.map(  img  =>(
                            <GifGridItem 
                                key={ img.id }
                                { ...img }  
                            />
                        ) )
                    }
                
                
            </div>
        </>    
    )
}

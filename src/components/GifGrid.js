import React from 'react'
import { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'
import { getGif } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);
    useEffect( () => {
        getGif( category )
            .then( setimages);
    }, [category])

    
    

    

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

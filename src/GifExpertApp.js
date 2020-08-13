import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['One punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setcategories(
    //        [ 'HunterxHunter', ...categories]
    //     );
    // }

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory />
           <hr />

    

           <ol>
               { 
                    categories.map( (category) => {

                    return <li key= { category }> { category } </li>
                    })
               }
           </ol>
        </>
    )
}

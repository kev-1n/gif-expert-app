import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setcategories(
    //        [ 'HunterxHunter', ...categories]
    //     );
    // }

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories= { setCategories } />
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

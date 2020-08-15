export const getGif = async( category ) => {

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

   
    return gifs;

}
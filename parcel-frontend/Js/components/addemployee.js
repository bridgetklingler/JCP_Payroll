export default function AddArtistModal(){
    return `
    <section class='add-artist'>
        <input class='add-artist_name' type='text' placeholder='Add artist name...'>
        <input class='add-artist-hometown' type='text' placeholder='Add hometown...'>
        <input class='add-artist-imageurl' type='text' placeholder='Add artist image URL...'>
        <input class='add-artist-description' type='text' placeholder='Add artist description...'>
        <button class='add-artist_submit'>Submit</button>
    </section>
    `
 }
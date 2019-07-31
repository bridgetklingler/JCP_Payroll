<div id='button-box'>
       <button class='edit-artist'>Edit Artist</button>
       <button class='delete-artist'>Delete Artist</button>
       <section class='edit-box'>
           <input class='artist_id' type='hidden' value='${artist.artistId}'>
           <input class='edit-artist_imageUrl' type='hidden' value='${artist.imageURL}'>
           <input class='edit-artist_name' type='text' value='${artist.name}'>
           <input class='edit-artist_homeTown' type='text' value='${artist.homeTown}'>
           <textarea class='edit-artist_description'>${artist.description}</textarea>
           <button class='edit-artist_submit'>Submit</button>
       </section>
   </div>
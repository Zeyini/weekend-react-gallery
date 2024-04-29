import React, { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';





function GalleryList ({galleryArray}) {



return (



    <section data-testid="galleryList">
        {
            //    .map will loop through the array and create a div for each item and render item attributes
            galleryArray.map(item => (
                <GalleryItem key={item.id} item={item} />
              ))

        }

    </section>


)

}

export default GalleryList;



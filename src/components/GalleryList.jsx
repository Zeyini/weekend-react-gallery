import React, { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import axios from 'axios';





function GalleryList ( ) {

      // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchgallery();
  }, []); 




// setting state incoming data from server 
let [galleryArray, setgalleryArray] = useState([]);

const fetchgallery = () => {
  // fetch data from db
  axios({
    method: 'GET',
    url: '/api/gallery'
  })
    .then((response) => {
      console.log('data recieved fom db:', response.data);
      setgalleryArray(response.data);
    })
    .catch((error) => {
      console.log('bummer error in get route:', error);
  
    })

}



return (



    <section data-testid="galleryList">
    
            {/* //    .map will loop through the array and create a div for each item and render item attributes */}
           
                {
                    galleryArray.map((item) => {
                      return (
                        <GalleryItem
                          key={item.id}
                          item={item}
                          fetchgallery={fetchgallery}
                        />
                      )
                    })
                  }

    </section>


)

}

export default GalleryList;



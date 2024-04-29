import React, { useState } from 'react';
import axios from 'axios';
import './app.css';



function GalleryItem({ item }) {

{console.log(item)}

const [imageDisplay, setimageDisplay] = useState(true);
    const toggleImage = (id) => {
      if (imageDisplay === false) {
        setimageDisplay(true)
      } else {
        setimageDisplay(false)
      }
      console.log(`Div with ID ${id} clicked`);

    }



  return (
    <div data-testid="galleryItem"> 
      <div >{item.item}</div>
      <p>{item.title}</p>

      {console.log(item)}

          <span data-testid="toggle" onClick={toggleImage} className="listContainer" >
              {imageDisplay ?
                  <img src={item.url} alt={item.title}  />
                  :
                  <p> {item.description}</p>
              }
                <div>{item.likes} People love this!</div>
          </span>
      
    
      <div>
        <button data-testid="like" className="button">Love it</button>
      </div>
    </div>
  );
}






export default GalleryItem;
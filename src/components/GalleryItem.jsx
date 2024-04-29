import React, { useState } from 'react';
import axios from 'axios';
import './app.css';

// this function needs the item variable and the fetchgallery defined in the galleryList

function GalleryItem({item,fetchgallery}) {

{console.log(item)}

const addOne = () => {

    console.log("click count");
    
    axios.put(`/api/gallery/${item.id}`)
      .then(() => {
        fetchgallery();
      })
      .catch(error => {
        console.log('Error liking image:', error);
      });
  };



// toggl image state logic 
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
        <button data-testid="like" onClick={addOne}>Love it</button>
      </div>
    </div>
  );
}






export default GalleryItem;
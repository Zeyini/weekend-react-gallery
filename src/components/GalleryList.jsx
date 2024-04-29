import React, { useState, useEffect } from 'react';


function GalleryList ({galleryArray}) {


     // setting state of image
       // code in ternaries: setimageDisplay = imageDisplay === false ? true : false

     const [imageDisplay, setimageDisplay] = useState(false)

    const toggleImage = () => {
if (imageDisplay === false) {
  setimageDisplay(true)
} else {
  setimageDisplay(false)
}
    }



return (



    <section className="listContainer" data-testid="galleryList">
        {
            //    .map will loop through the array and create a div for each item and render item attributes
            galleryArray.map((item) => {
                return <div className="item" key={item.id} data-testid="galleryItem" >

                    <div>{item.item}</div>


                    <div  >
                        {
                            imageDisplay ? <></> :
                                <>
                                    <img data-testid="toggle" className="image" src={item.url} alt={item.title} />
                                </>
                        }
                    </div>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div>{item.likes} People love this!</div>
                    <div><button className="button">Love it</button></div>
                    <button onClick={toggleImage}>toggle</button>

                </div>

                //  <button className='removeimage'></button>

            })

        }

    </section>


)

}

export default GalleryList;

// import './app.css';
import GalleryList from '../GalleryList'



function App() {






    return (
      <div data-testid="app" >
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/> */}

      <GalleryList />
      





        {/* <section className="listContainer" data-testid="galleryList">
          {
        //    .map will loop through the array and create a div for each item and render item attributes
            galleryArray.map((item) => { 
              return <div  className="item" key={item.id} data-testid="galleryItem" >

              <div>{item.item}</div>

              
           <div  >
           {
                imageDisplay ? <></> :
                 <>
            <img  data-testid="toggle" className="image" src={item.url} alt={item.title} />
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

        </section> */}
       

      </div>






      
    );
}

export default App;

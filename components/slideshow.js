import React from 'react';
import { Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caption: 'Colorful Hot Air Balloon'
  },
  {
    url: 'https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    caption: 'Laser Club'
  },
  {
    url: 'https://images.unsplash.com/photo-1623888885364-56cf1a38b6ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    caption: 'Dessert'
  },
  {
    url: 'https://images.unsplash.com/photo-1595596586764-ebf88a40e690?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    caption: 'Hiking in the Forrest'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img style={{
                  width: '100%',
                  height: 'calc(100vh - 60px)',
                  objectFit: 'cover',
                  position: 'relative'
                }}
                  src={fadeImage.url} />
                <h2 style={{
                    border: '1px solid black',
                  top: 837,
                    position: 'absolute'
                }}>{fadeImage.caption}</h2>
              </div>
          </div>
          ))}
        </Fade>
      </div>
    )
}
  
export default Slideshow;
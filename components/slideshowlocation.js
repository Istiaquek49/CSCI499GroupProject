import React from 'react';
import { Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1633882228840-e847b7694baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1614357932292-a38393b966a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1633749130895-bb439832d4b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    caption: 'Slide 3'
  },
];

const Slideshowlocation = () => {
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
  
export default Slideshowlocation;
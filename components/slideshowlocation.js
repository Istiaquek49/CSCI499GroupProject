import React from 'react';
import { Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1503609796759-4cfd4d5a0b9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80',
    caption: 'San Francisco'
  },
  {
    url: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1293&q=80',
    caption: 'Night At Time Square'
  },
  {
    url: 'https://images.unsplash.com/photo-1514893011-72dfa15bd29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80',
    caption: 'St. Louis'
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
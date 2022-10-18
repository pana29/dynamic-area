import React from 'react'
import img2 from '../../assets/img3.jpeg'
import img3 from '../../assets/img1.jpeg'
import img4 from '../../assets/img6.jpeg'
import img5 from '../../assets/img5.webp'

import '../gallery/Gallery.css'

const Gallery = () => {
  return (
    <div className="gallery">
        <div className="container-gallery">
            <h2 className="gallery-h2">Live in the <br /> Future</h2>
            <div className="gallery-photo">
                <div className="gallery-left">
                    <div className="gallery-left-top">
                        <img className='img-left' src={img2} alt="gallery-top" />
                        <h4 className="gallery-h4">20 VILLA</h4>
                    </div>
                    <div className="gallery-left-bottom">
                        <h3 className="gallery-h3">Comfort <br /> is a choice</h3>
                        <p className='gallery-p'>and we offer 4 of those</p>
                    </div>
                </div>
                <div className="gallery-right">
                    <div className="gallery-right-top">
                        <div className="gallery-right-top-left">
                            <img className='img-right-left-top' src={img3} alt="img-right-left"/>
                            <h4 className="gallery-h4">182 APARTMENTS</h4>
                        </div>
                        <div className="gallery-right-top-right">
                        <img className='img-right-left-top' src={img4} alt="img-right-left"/>
                            <h4 className="gallery-h4">20 PENTHOUSES</h4>
                        </div>
                    </div>
                    <div className="gallery-right-bottom">
                        <img  className='img-right-left-top' src={img5} alt="img-2"/>
                        <h4 className="gallery-h4">230 MAPLE</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
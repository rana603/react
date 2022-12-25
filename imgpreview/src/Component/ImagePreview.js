import React from 'react';
import { useState } from 'react'
import './Style.css';

function ImagePreview() {
    const galleryImages = [
        {
          img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    
    
      const [slideNumber, setSlideNumber] = useState(0)
    
      // Previous Image
      const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( galleryImages.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
      }
    
      // Next Image  
      const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
      }
  return (
    <div>
      <div className='sliderWrap'>
        <button className='btnNext' onClick={nextSlide}><i class="fa-solid fa-chevron-right"></i></button>
        <button className='btnPrev' onClick={prevSlide} ><i class="fa-sharp fa-solid fa-chevron-left"></i></button>
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
    </div>
  )
}

export default ImagePreview;

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/Home/Banner/01.jpg'
import img2 from '../../../assets/Home/Banner/02.jpg'
import img3 from '../../../assets/Home/Banner/03.jpg'
import img4 from '../../../assets/Home/Banner/04.jpg'
import img5 from '../../../assets/Home/Banner/05.jpg'
import img6 from '../../../assets/Home/Banner/06.jpg'

const Banner = () => {
  return (
    <Carousel className='mx-auto'>
    <div>
        <img src= {img1}/>  
    </div>
    <div>
        <img src= {img2}/>  
    </div>
    <div>
        <img src= {img3}/>  
    </div>
    <div>
        <img src= {img4}/>  
    </div>
    <div>
        <img src= {img5}/>  
    </div>
    <div>
        <img src= {img6}/>  
    </div>
 
</Carousel>
  )
}

export default Banner

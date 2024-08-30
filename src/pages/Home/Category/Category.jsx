import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '../../../assets/Home/Category/slide1.jpg'
import slide2 from '../../../assets/Home/Category/slide2.jpg'
import slide3 from '../../../assets/Home/Category/slide3.jpg'
import slide4 from '../../../assets/Home/Category/slide4.jpg'
import slide5 from '../../../assets/Home/Category/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Category = () => {
  return (
   <div className='mx-48 my-20'>
     <Swiper
    slidesPerView={4}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide><img src={slide1} alt="" />
    <h1 className='uppercase text-3xl text-center -mt-20 text-white shadow-black shadow-md'>Salads</h1>
    </SwiperSlide>
    <SwiperSlide><img src={slide2} alt="" />
    <h1 className='uppercase text-3xl text-center -mt-20 text-white shadow-black shadow-md'>Soups</h1></SwiperSlide>
    <SwiperSlide><img src={slide3} alt="" />
    <h1 className='uppercase text-3xl text-center -mt-20 text-white shadow-black shadow-md'>Pizzas</h1></SwiperSlide>
    <SwiperSlide><img src={slide4} alt="" />
    <h1 className='uppercase text-3xl text-center -mt-20 text-white shadow-black shadow-md'>Desserts</h1>
    </SwiperSlide>
    <SwiperSlide><img src={slide5} alt="" />
    <h1 className='uppercase text-3xl text-center -mt-16 text-white shadow-black shadow-md'>Salads</h1>
    </SwiperSlide>
    
  </Swiper>
   </div>
  )
}

export default Category

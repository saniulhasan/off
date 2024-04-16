import React, { useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination} from 'swiper/modules';
import './SliderInline.css';
import { SliderContent } from './SliderContent';

import img1 from '../../assets/headphone.jpg';
import img2 from '../../assets/drone.webp';
import img3 from '../../assets/earpod.jpeg';
import img4 from '../../assets/macbook.webp';
import img5 from '../../assets/smobile.webp';
import img6 from '../../assets/bluepen.webp';
import img7 from '../../assets/phone.jpeg';
import img8 from '../../assets/watch.webp';

const Products = [
   {
      id: 1,
      name: 'True Wireless In-Ear Black headphone',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img1,
   },
   {
      id: 2,
      name: 'Flying White Quadcopter Drone in the Sky',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img2,
   },
   {
      id: 3,
      name: 'Iphone 6, Earpods and Macbook In One Photos',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img3,
   },
   {
      id: 4,
      name: 'Silver Macbook Surro unding Black',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img4,
   },
   {
      id: 5,
      name: 'Close-up of Human Hand With Text',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img5,
   },
   {
      id: 6,
      name: 'Close-Up Photo Of Blue Container I Guess',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img6,
   },
   {
      id: 7,
      name: 'A Classic Black Blackbery Qwerty Phone',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img7,
   },
   {
      id: 8,
      name: 'Person in Blue Sleeve Shirt Using Smart Watch',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img8,
   },
];

function SliderInline() {

    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
     });
     const SlideRef = useRef();
  
     const handleNext = () => {
        SlideRef.current.swiper.slideNext();
     };
  
     const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
     };
  
     const onSlideChange = (swiper) => {
        handleSlideByState({
           isFirst: swiper.isBeginning,
           isLast: swiper.isEnd,
        });
     };
  
     const { isLast, isFirst } = slideBegOrNot;
  return (
    <div className="SliderInline">
  <div  className="leftarrow" >
  <BsArrowLeft
                           className={`Arrow ${isFirst ? 'disabled' : ''}`}
                           onClick={handlePrev}
                          
     />

  </div>
  
 
   <Swiper
  slidesPerView={1}
  spaceBetween={0}
  className={'mySwiper'}
  ref={SlideRef}
  onSlideChange={onSlideChange}
  pagination={{
    el: '.swiper-paginations',
    type: 'fraction',
  }}
  navigation={false}
  modules={[Pagination, Navigation]}

  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    390: {
      slidesPerView: 1.5,
    },
    502: {
      slidesPerView: 2,
    },
    802: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }}
>
  {Products.map((item) => {
    return (
      <div className='swiper_slide'>
        <SwiperSlide key={item.id} >
          <SliderContent
            key={item.id}
            image={item.img}
            title={item.name}
            description={item.description}
            alt={item.name}
          />
        </SwiperSlide>
      </div>
    );
  })}
</Swiper>


            
<div className="rightarrow">
<BsArrowRight 
                           className={`Arrow ${isLast ? 'disabled' : ''}`}
                           onClick={handleNext}
                        />

</div>
      
           
    </div>
  )
}

export default SliderInline
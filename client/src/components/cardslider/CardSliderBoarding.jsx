import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from '../Cards/ImageCard';
import './CardSlider.css'

const CardSliderBoarding = ({heading}) => {


  // if(window.innerWidth<='1200' && window.innerWidth>='800'){
  //   setSlides(2)
  // }
  // else if(window.innerWidth<='800'){
  //   setSlides(1)
  // }

  var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'100px',
        responsive:[
          {
            breakpoint:425,
            settings:{
              slidesToShow:1,
              centerMode:true,
              centerPadding:'20px'
            }
          },
          {
            breakpoint:592,
            settings:{
              slidesToShow:1,
              centerMode:true,
              centerPadding:'40px'
            }
          },
          {
            breakpoint:660,
            settings:{
              slidesToShow:1,
              centerMode:true
            }
          },
          {
            breakpoint:963,
            settings:{
              slidesToShow:2,
              centerMode:false
            }
          },
          {
            breakpoint:1200,
            settings:{
              slidesToShow:3,
              centerMode:false
            }
          }
        ]
      };

  return (
    <div className='mb-5 mt-5 card-slider'>
      <h1>{heading}</h1>
      <hr />
      <Slider {...settings}>
      <div>
        <ImageCard src={'assets/boardingSchools/edify.jpg'} pagelink={"/BoardingSchools"} name={'Edify School'}/>
      </div>
      <div>
        <ImageCard src={'assets/boardingSchools/jugraj.jpg'} pagelink={"/BoardingSchools"} name={'Jugraj Academy'}/>
      </div>
      <div>
        <ImageCard src={'assets/boardingSchools/dps2.jpg'}  pagelink={"/BoardingSchools"} name={'Delhi Public School'}/>
      </div>
      <div>
        <ImageCard src={'assets/boardingSchools/ssg.jpg'} pagelink={"/BoardingSchools"} name={'Shiv Shakti Gurukulam'}/>
      </div>
    </Slider>
    </div>
  )
}

export default CardSliderBoarding

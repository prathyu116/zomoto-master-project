import React from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";


import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./../Arrow"
import DeliveryFoodCategory from './DeliveryFoodCategory ';

const DelevaryCarousal = () => {
    var settings = {
        infinite: false,
        speed: 500,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                
              }
            }]
     
    };



    return (
        <>
            <div className="lg:hidden sm:block md:hidden">
                <h1 className="text-xl font-semibold my-3">Eat what makes you happy!</h1>
                <div className="flex flex-wrap justify-between gap-2">

                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />

                </div>
                <div className="mt-5">
                    <img
                        src="https://b.zmtcdn.com/web/assets/e80201cf2e86a49ce4722e9b5ddfab551620045350.png?output-format=webp"
                        alt="image" />
                </div>
            </div>


            <div className="hidden lg:block mx-28">
                <h1 className="text-xl font-semibold my-3">Eat what makes you happy</h1>
                <Slider {...settings} className="">



                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />
                    <DeliveryFoodCategory />

                </Slider>

            

            </div>
        </>
    )
}

export default DelevaryCarousal;

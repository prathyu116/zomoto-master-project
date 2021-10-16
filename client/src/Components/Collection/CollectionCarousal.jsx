import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import CollectionList from './CollectionList'
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./../Arrow"

const CollectionCarousal = () => {
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
            <div className="hidden lg:block  mx-28 ">
                <h1 className="text-3xl font-semibold my-3">Collections</h1>
                <div className="flex flex-row items-center justify-between gap-7">
                    <span>Explore curated lists of top restaurants, cafes, pubs, and bars in Bhubaneswar, based on trends
                    </span>
                    <div className="flex flex-row items-center justify-start ">
                        <span className="text-zomato-400">All Collection In Kerala</span> <IoMdArrowDropright />

                    </div>
                </div>



                <Slider {...settings} className="">


                    <CollectionList />
                    <CollectionList />
                    <CollectionList />
                    <CollectionList />
                    <CollectionList />
                    <CollectionList />
                    <CollectionList />


                </Slider>



            </div>

            {/* mobile screen */}

            <div className="sm:block lg:hidden  flex-col items-center justify-start   ml-4">
                <div className="flex flex-row items-center justify-between ">
                    <h1 className="text-2xl font-semibold ">Collections</h1>
                    <div className="flex items-center">
                        <span className="text-zomato-400">All Collection In Kerala</span>
                        <IoMdArrowDropright />
                    </div>
                </div>

                <p className="text-xl my-3">Explore curated lists of top restaurants, cafes, pubs, and bars in Bhubaneswar, based on trends
                </p>

                <div className="flex flex-row items-center justify-start gap-3 overflow-x-scroll">
                    <CollectionList />
                    <CollectionList />
                    <CollectionList />
                    <CollectionList />
                    <CollectionList />


                </div>


            </div>

        </>
    )
}

export default CollectionCarousal

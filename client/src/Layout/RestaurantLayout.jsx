import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { AiOutlineCamera,AiOutlineStar } from "react-icons/ai"
const RestaurantLayout = () => {
    return (
        <>
            <div className=" container mx-auto mt-2 lg:px-20">

                <Navbar />

                <div className="w-full h-60 md:hidden">
                    <img className="w-full h-full object-cover"
                        src="https://b.zmtcdn.com/data/pictures/chains/4/19723154/5e0e8eae5841ae3f32d6203e79cacd1e.png" alt="restaurant img" />
                </div>
                <div className="hidden w-full h-96 md:flex gap-2">
                    <div className="w-7/12 h-full overflow-hidden">
                        <img className="w-full h-full object-cover  transform transition duration-700 hover:scale-110 "
                            src="https://b.zmtcdn.com/data/pictures/chains/4/19723154/5e0e8eae5841ae3f32d6203e79cacd1e.png" alt="restaurant img" />
                    </div>
                    <div className="w-1/6 h-full flex flex-col gap-1 overflow-hidden">
                        <img className="w-full h-full object-cover transform transition duration-700 hover:scale-110"
                            src="https://b.zmtcdn.com/data/pictures/chains/4/19723154/5e0e8eae5841ae3f32d6203e79cacd1e.png" alt="restaurant img" />
                        <img className="w-full h-full object-cover transform transition duration-700 hover:scale-110"
                            src="https://b.zmtcdn.com/data/pictures/chains/4/19723154/5e0e8eae5841ae3f32d6203e79cacd1e.png" alt="restaurant img" />
                    </div>
                    <div className="w-1/6 h-full flex flex-col gap-1 overflow-hidden">
                        <div className="w-full h-full relative">
                            <img className="w-full h-full object-cover transform transition duration-700 hover:scale-110"
                                src="https://b.zmtcdn.com/data/pictures/chains/4/19723154/5e0e8eae5841ae3f32d6203e79cacd1e.png" alt="restaurant img" />
                            <div className="absolute inset-0 bg-opacity-50 bg-black w-full h-full rounded">
                                <h4 className=" absolute h-full w-full flex items-center justify-center text-white">view gallery</h4>
                            </div>
                        </div>

                        <div className="w-full h-full relative">
                            <img className="w-full h-full object-cover transform transition duration-700 hover:scale-110"
                                src="https://b.zmtcdn.com/data/pictures/chains/4/19723154/5e0e8eae5841ae3f32d6203e79cacd1e.png" alt="restaurant img" />
                            <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded">
                                <div className=" absolute h-full w-full flex items-center justify-center text-white text-2xl">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-black rounded-full p-3 bg-opacity-50 text-white">
                                            <AiOutlineCamera />

                                        </div>
                                        <p>Add Photos</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                   <div className="flex items-center justify-between gap-3 mt-5">
                       <h1 className="text-xl md:text-3xl font-semibold md:font-bold">Mumbai Express</h1>
                       <div className="flex flex-row gap-2  px-20 ">
                           <div className="flex flex-row   items-center gap-1 text-white font-medium bg-green-600">
                               <span>3.8</span><AiOutlineStar/>
                               
                           </div>
                          <div className="flex flex-col items-start gap-0">
                          <span>2</span>
                           <span>Dining review</span>
                          </div>
                           <div className="flex  items-center gap-1 text-white font-medium bg-green-600">
                               <span>3.8</span><AiOutlineStar/>
                           </div>
                           <div className="flex flex-col items-start">
                          <span>2</span>
                           <span>Dining review</span>
                          </div>
                       </div>
                   </div>
            </div>
        </>
    )
}

export default RestaurantLayout

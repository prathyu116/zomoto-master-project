import React from 'react'

const NightRestaurantList = () => {
    return (
        <div>
            {/* sm:w-96  sm:h-52 */}
            <div className="bg-white rounded-md  shadow-lg py-5 relative ">
                    <div className=' w-80 h-52 lg:w-84 lg:h-60  relative'>
                    <div className="flex w-full justify-between absolute bottom-2 ">
                    <p className="  bg-pink-600 p-1 text-white">Pro - Get 15% off</p>
                    <span className="bg-white opacity-60 p-1 rounded mr-2">42 km</span>
                    </div>
                        <img
                            src="https://b.zmtcdn.com/data/pictures/1/2901291/bccaf8573d23f39b1e22abb39bdf749d_featured_v2.jpg"
                            alt="restaurant"
                            className="w-full h-full rounded-lg  object-cover "
                        />
                    </div>
                    <div className="flex flex-row items-start justify-between">
                        <div>
                            <h3 className="my-2 text-base font-medium ">Chill Grill & Bar</h3>
                            <p className="lg:text-xs sm:text-4xl text-gray-500 font-bold">mexican,italian,american</p>
                            <p className="lg:text-xs sm:text-4xl text-gray-500 font-bold">kanhangad,kerala</p>

                        </div>
                        <div className="flex flex-col items-center justify-between ">
                            <span className="bg-green-700 my-2 text-white p-1 lg:text-xs sm:text-4xl rounded-sm">3.8⭐</span>
                            <span className="lg:text-xs sm:text-4xl">$1500 for two</span>
                        </div>

                    </div>

                </div>

        </div>
    )
}

export default NightRestaurantList

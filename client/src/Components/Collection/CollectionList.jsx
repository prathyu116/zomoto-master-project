import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

const CollectionList = () => {
    return (
        <>

            <div>

                <div className=" lg:rounded-md bg-white shadow-md relative">

                    <div className='w-64  h-96 lg:w-60 lg:h-48 md:w-60 md:h-48'>
                        <img
                            src="https://b.zmtcdn.com/data/collections/9662e85f2ba360c0da1d95153169ffbc_1625577076.jpeg?output-format=webp"
                            alt="Pizza"
                            className="w-full h-full lg:rounded-lg object-cover    "
                        />
                    </div>

                        <h3 className="text-white text-2xl  absolute   bottom-1 left-1 bg-gradient-to-t from-black ">Best of kerala</h3>

                </div>


            </div>


        </>
    )
}

export default CollectionList

import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const RestaurantCard = ({data}) => {
    return (
        <div className="w-full  bg-white border border-gray-200 rounded-lg shadow ">
            <Link to="">
                <Carousel infiniteLoop showArrows={false} autoPlay={true} interval={3000} showThumbs={false}>
                    <div>
                        <img className=' rounded-t-lg' src="https://i.ibb.co/qg2qdKZ/pansi.jpg" alt="product" />
                    </div>
                    <div>
                        <img className=' rounded-t-lg' src="https://i.ibb.co/TgxpZQX/pansi2.jpg" alt="product" />
                    </div>
                    <div>
                        <img className=' rounded-t-lg' src="https://i.ibb.co/YdJbskR/pansi3.jpg" alt="product" />
                    </div>

                </Carousel>
            </Link>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between mt-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {data.name}
                    </span>

                </div>

                <div className="flex items-center mt-2.5 mb-5">
                    <div
                        className="flex items-center  w-4 h-4 text-yellow-300 mr-1">
                        <i class="fa-solid fa-star"></i>
                        <p className="text-black">rating</p>
                        <span className="bg-teal-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        {data.rating}
                        </span>
                    </div>
                    {/* Menu buttond */}

                    
                </div>
                <div>
                    <div className="text-center flex gap-2">
                        <Link className="btn btn-sm w-10/12 text-white hover:text-teal-600 hover:bg-white bg-teal-600 hover:border-2 hover:border-teal-600  rounded-lg text-sm" to={`/details/${data.id}`}>
                        <button
                            
                            type="button"
                            
                        >
                            View Details
                        </button>
                        </Link>
                        <button className='btn btn-outline btn-sm border-teal-500 text-teal-500 hover:text-red-500 hover:border-red-500 hover:bg-white' ><FaRegHeart /></button>
                       

                    </div>

                </div>

                


            </div>







        </div>
    );
}

export default RestaurantCard
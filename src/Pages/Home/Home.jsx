import React from 'react'
import Carousel from '../../Components/Home-Components/Carousel'
import Featured from '../../Components/Home-Components/Featured'
import RestaurantCard from '../../Components/Card-Components/Resturant-Card/RestaurantCard'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const data = useLoaderData();

    return (
        <div className='bg-gray-900 '>
            <Carousel />
            <Featured />
            <h1 className='text-3xl  font-bold text-white text-center py-5'>Restaurants</h1>
            <div className='grid grid-cols-3 gap-10 w-10/12 mx-auto'>
                {
                    data?.slice(0, 3).map(data => <RestaurantCard data={data} />)
                }
            </div>
            <div className='flex items-center justify-center py-5'>
            <button className='btn text-center '>See more</button>
            </div>


        </div>
    )
}

export default Home
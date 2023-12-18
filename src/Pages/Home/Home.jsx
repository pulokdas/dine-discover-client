import React from 'react'
import Carousel from '../../Components/Home-Components/Carousel'
import Featured from '../../Components/Home-Components/Featured'
import Footer from '../../Components/Footer/Footer'
import RestaurantCard from '../../Components/Card-Components/Resturant-Card/RestaurantCard'

const Home = () => {
  return (
    <div>
         <Carousel/>
        <Featured/>
        <RestaurantCard/>
        
    </div>
  )
}

export default Home
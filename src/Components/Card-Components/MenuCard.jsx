import React from 'react'
import { GiPriceTag } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
const MenuCard = ({menu}) => {
    const{name, price, image, description, } =menu;
  return (
    <div className='flex w-full gap-5 '>
        <img className='w-32 h-32' src={image} alt="" />
        <div className='w-full'>
           <div className=' flex justify-between'>
           <h1 className=' text-xl text-teal-500 font-bold'>{name}</h1>
           <button className='btn btn-sm border-none bg-gray-500'><FaPlus /></button>
           </div>
            <h1 className='flex items-center gap-2 text-white'><span className='text-teal-500'><GiPriceTag /></span>{price}</h1>
            <p className='text-white'>{description}</p>
        </div>
    </div>
  )
}

export default MenuCard
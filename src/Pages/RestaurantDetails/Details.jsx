import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FcRating } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import MenuCard from '../../Components/Card-Components/MenuCard';
const Details = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [restaurant, setRestaurant] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const selectedRestaurant = await data.find(restaurant => restaurant.id === parseInt(id, 10));

                if (selectedRestaurant) {
                    setRestaurant(selectedRestaurant);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [data, id]);
    const { name, image, phone, location, description, rating, menu } = restaurant;
    return (
        <div className="pt-32 bg-gray-900">
            {isLoading ? (
                <div className='flex items-center justify-center h-screen'>
                    <span className="loading loading-bars loading-lg"></span>

                    {/* Render other details here */}
                </div>
            ) : (
                <div className='w-11/12 mx-auto grid grid-cols-2 gap-4'>
                    <div className='h-screen '>
                        <div className='h-1/2 '>
                            <img className=' h-full w-full' src={image} alt="" />
                            <div className='flex items-end gap-10 py-5'>
                                <h2 className='text-teal-500 text-4xl font-bold'>{name}</h2>
                                <h2 className='flex items-center gap-1 text-gray-200 text-2xl font-bold'><FcRating />{rating}</h2>
                            </div>
                            <div className='space-y-5'>
                                <p className=' text-white text-2xl'>{description}</p>
                                <div className=''>
                                <p className=' flex items-center gap-1 text-white text-xl'><span className='text-teal-500'><FaPhoneVolume /></span>{phone}</p>
                                <p className=' flex items-center gap-1 text-white text-xl'><span className='text-teal-500'><FaMapLocationDot /></span>{location}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mx-auto h-screen '>
                        <h1 className=' text-3xl font-bold text-center mb-10 text-white bg-teal-500'>MENU</h1>
                        <div className='w-full grid grid-cols-1 gap-5'>
                        {
                            menu.map(menu=><MenuCard menu={menu}/>)
                        }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;

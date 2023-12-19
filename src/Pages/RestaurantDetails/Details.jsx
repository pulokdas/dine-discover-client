import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const selectedRestaurant =await data.find(restaurant => restaurant.id === parseInt(id, 10));

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

  return (
    <div className="py-32 bg-gray-900">
      {isLoading ? (
        <div>
          <p>Restaurant not found</p>
          {/* Render other details here */}
        </div>
      ) : (
        <h2 className='text-white'>{restaurant.name}</h2>
      )}
    </div>
  );
};

export default Details;

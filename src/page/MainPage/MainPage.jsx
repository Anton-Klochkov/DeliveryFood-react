import { Typography } from '@mui/material';
import React from 'react';
import { useFetchData } from '../../components/api/useFetchData/useFetchData';

import api from '../../components/api/index';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';

const MainPage = () => {
  const url = api.restaurants.allRestaurants();
  const { data = [], isLoading } = useFetchData(url);

  console.log('data :>> ', data);
  return (
    <div>
      {!isLoading ? (
        <Typography>
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </Typography>
      ) : (
        <RestaurantsList rData={data.Restaurants} />
      )}
    </div>
  );
};

export default MainPage;

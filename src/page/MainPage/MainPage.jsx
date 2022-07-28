import { Box } from '@mui/material';
import React from 'react';
import { useFetchData } from '../../components/api/useFetchData/useFetchData';

import api from '../../components/api/index';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import Progress from '../../components/Progress/Progress';

const MainPage = () => {
  const url = api.restaurants.allRestaurants();
  const { data = [], isLoading } = useFetchData(url);

  return (
    <div>
      {isLoading ? (
        <Box sx={{ height: '86vh', display: 'flex', alignItems: 'center' }}>
          <Progress />
        </Box>
      ) : (
        <RestaurantsList rData={data.Restaurants} />
      )}
    </div>
  );
};

export default MainPage;

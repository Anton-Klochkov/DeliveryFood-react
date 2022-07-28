import { Box, Grid, Typography } from '@mui/material';
import RestaurantListItem from './RestaurantListItem/RestaurantListItem';

import styles from './RestaurantsList.module.scss';

const RestaurantsList = ({ rData }) => {
  return (
    <>
      {rData?.length ? (
        <Grid container spacing={8} sx={{padding: '0 64px'}}>
          {rData.map((item) => (
            <Grid className={styles.cardItemWrapper} item xs={12} sm={6} md={4} key={item.id}>
              <RestaurantListItem item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box className={styles.mainRestList}>
          <Typography variant="h4" color="primary">
            Извините, но такого пользователя не найдено....
          </Typography>
        </Box>
      )}
    </>
  );
};

export default RestaurantsList;

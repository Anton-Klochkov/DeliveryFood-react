import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';

import { styled } from '@mui/material/styles';
import styles from './RestaurantListItem.module.scss';
import { useState } from 'react';
import MenuComponent from '../../MenuComponent/MenuComponent';

const RestaurantListItem = ({ item }) => {
  const { logoIcon, nameRestaurant, minPriceDelivery, rating, title } = item;

  const curPrice = `Минимальная цена заказа ${minPriceDelivery}`;

  const [rate, setRate] = useState(rating);

  const CustomCardMedia = styled('img')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  }));

  const [checked, setChecked] = useState(false);

  const handleToggleForm = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Card onClick={handleToggleForm} className={styles.cardItemWrapper}>
      <Box className={styles.wrapImg}>
        <CustomCardMedia component="img" src={logoIcon} alt="Изображение" />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nameRestaurant}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography>{curPrice}</Typography>
      </CardContent>
      <Rating
        value={rate}
        onChange={(event, newValue) => {
          setRate(newValue);
        }}
      />
      <CardActions className={styles.cardAction}>
        <MenuComponent
          checked={checked}
          handleToggleForm={handleToggleForm}
          menu={item?.menu}
        />
      </CardActions>
    </Card>
  );
};

export default RestaurantListItem;

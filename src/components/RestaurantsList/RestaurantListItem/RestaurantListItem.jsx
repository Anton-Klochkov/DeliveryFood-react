import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, Rating } from '@mui/material';

import { styled } from '@mui/material/styles';
import styles from './RestaurantListItem.module.scss';
import { height } from '@mui/system';
import { useState } from 'react';
import MenuComponent from '../../MenuComponent/MenuComponent';

const RestaurantListItem = ({ item }) => {
  const { logoIcon, nameRestaurant, price, rating, title, type } = item;

  const curPrice = `Минимальная цена заказа ${price}`;

  const [rait, setRait] = useState(rating);

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
    <Card className={styles.cardContent}>
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
        value={rait}
        onChange={(event, newValue) => {
          setRait(newValue);
        }}
      />
      <CardActions
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          width: '100%',
        }}
      >
        <MenuComponent checked={checked} handleToggleForm={handleToggleForm} />
      </CardActions>
    </Card>
  );
};

export default RestaurantListItem;

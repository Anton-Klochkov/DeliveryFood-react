import React, { useContext, useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { ThemeContext } from '../../../UI/ThemeHandler/ThemeHandler';

import styles from './ColorSetting.module.scss';

const ColorSetting = () => {
  const ThemeModeContext = useContext(ThemeContext);
  const { setThemeMode, themeMode } = ThemeModeContext;

  const [value, setValue] = useState(themeMode);

  const handleThemeChange = (event) => {
    const value = event.target.value;
    switch (value) {
      case 'light':
        localStorage.setItem('preferred-theme', 'light');
        setValue(value);
        setThemeMode(value);
        break;
      case 'dark':
        localStorage.setItem('preferred-theme', 'dark');
        setValue(value);
        setThemeMode(value);
        break;
      case 'red':
        localStorage.setItem('preferred-theme', 'red');
        setValue(value);
        setThemeMode(value);
        break;
      default:
        break;
    }
  };

  return (
    <FormControl className={styles.themeContainer}>
      <FormLabel>
        <h3>Настройки пользователя</h3>
      </FormLabel>
      <RadioGroup
        row={true}
        className={styles.variantColor}
        value={value}
        onChange={handleThemeChange}
      >
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        <FormControlLabel value="red" control={<Radio />} label="Red" />
      </RadioGroup>
    </FormControl>
  );
};

export default ColorSetting;

import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss'
const Layout = () => {
  return (
    <Box className={styles.mainLayout}>
      <header >
        <Typography>header</Typography>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Typography>footer</Typography>
      </footer>
    </Box>
  );
};

export { Layout };

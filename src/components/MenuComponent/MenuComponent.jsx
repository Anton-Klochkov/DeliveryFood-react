import { Box, Modal, Paper, Slide, Typography } from '@mui/material';
import React from 'react';
import ButtonDefault from '../buttons/ButtonDefault/ButtonDefault';


const MenuComponent = ({ handleToggleForm, checked, menu }) => {
  return (
    <>
      <Modal
        keepMounted
        open={checked}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={3}>
            <Typography>
              asddddddddddddddddddddddddddddddddddddddddddd
            </Typography>
            <Box>
              <ButtonDefault
                fullWidth={true}
                title="Вернуться назад"
                variant="outlined"
                onClose={handleToggleForm}
              />
            </Box>
          </Paper>
        </Slide>
      </Modal>
    </>
  );
};

export default MenuComponent;

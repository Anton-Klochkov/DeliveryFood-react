import { Box, Modal, Paper, Slide, Typography } from '@mui/material';
import React from 'react';
import ButtonDefault from '../buttons/ButtonDefaul/ButtonDefault';

const MenuComponent = ({ handleToggleForm, checked }) => {
  return (
    <>
      <ButtonDefault
        variant="contained"
        title="Открыть меню"
        color="success"
        fullWidth={true}
        onClick={handleToggleForm}
      />
      <Modal
        keepMounted
        open={checked}
        onClose={handleToggleForm}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={3}>
            <Typography>
              asddddddddddddddddddddddddddddddddddddddddddd
            </Typography>
          </Paper>
        </Slide>
      </Modal>
    </>
  );
};

export default MenuComponent;

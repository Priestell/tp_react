import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

function AppBarComponent({ onAddContact }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddContact = () => {
    const newContact = {
      first_name: firstName,
      last_name: lastName,
      address: address,
      occupation: occupation
    };
    // Appeler la fonction onAddContact et passer le nouveau contact
    onAddContact(newContact);
    // Réinitialiser les champs de formulaire et fermer le popup
    setFirstName('');
    setLastName('');
    setAddress('');
    setOccupation('');
    handleCloseDialog();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Contacts</Typography>
          <IconButton color="inherit" onClick={handleOpenDialog}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Ajouter un contact</DialogTitle>
        <DialogContent>
          <TextField
            label="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Travail"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddContact}>
            Ajouter
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AppBarComponent;

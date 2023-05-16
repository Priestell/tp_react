import React,{ useState, useEffect } from 'react';
import AppBarComponent from './components/AppBar';
import ContactList from "./components/contact-list/ContactList";

function App() {
  const handleAddContact = () => {
    // Logique pour ajouter un contact
    console.log('Ajouter un contact');
  };

  return (
    <div>
      <AppBarComponent onAddContact={handleAddContact} />
      <ContactList />

      {/* Reste du contenu de votre application */}
    </div>


  );
}

export default App;

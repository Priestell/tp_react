import React, { useState, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactInfo from '../contact-info/ContactInfo';

const API_URL = 'https://random-data-api.com/api/v2/users?size=100';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showContactInfo, setShowContactInfo] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, []);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setShowContactInfo(true);
  };

  const handleCloseContactInfo = () => {
    setShowContactInfo(false);
  };

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onClick={handleContactClick} />
      ))}
      {showContactInfo && (
        <ContactInfo contact={selectedContact} onClose={handleCloseContactInfo} />
      )}
    </div>
  );
}

export default ContactList;

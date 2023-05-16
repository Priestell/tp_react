import React from 'react';
import styles from './ContactInfo.module.css';

function ContactInfo({ contact, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h3>{contact.first_name} {contact.last_name}</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone_number}</p>
        <p>Address: {contact.address.street_address} {contact.address.street_name} {contact.address.zip_code}</p>
        <p>Travail : {contact.employment.title}</p>
        <img src={contact.avatar} alt="Avatar" />
        <button className={styles.goBackButton} onClick={onClose}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;

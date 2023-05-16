import React from 'react';
import styles from './contact-items.module.css';

function ContactItem({ contact, onClick }) {
  const handleClick = () => {
    onClick(contact);
  };

  return (
    <React.Fragment>
      <button className={styles.contactItem} onClick={handleClick}>
        <h3>{contact.first_name} {contact.last_name}</h3>
      </button>
      <br /> {/* Saut de ligne */}
    </React.Fragment>
  );
}

export default ContactItem;

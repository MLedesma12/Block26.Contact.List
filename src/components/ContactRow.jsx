import React from "react";

const ContactRow = ({ setSelectedContact, contact }) => {
  return (
    <tr onClick={() => setSelectedContact(contact)}>
      <td className="row">{contact.name}</td>
      <td className="row">{contact.email}</td>
      <td className="row">{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;

import { useState } from "react";

const Selected = ({ contact, setSelectedContact }) => {
  return (
    <>
      <h2>Selected Contact</h2>
      <p className="text">Name: {contact.name}</p>
      <p className="text">Email: {contact.email}</p>
      <p className="text">Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContact(null)}>Back</button>
    </>
  );
};

export default Selected;

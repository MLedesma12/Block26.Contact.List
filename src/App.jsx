import { useState } from "react";
import ContactList from "./components/ContactList.jsx";
import Selected from "./components/Selected.jsx";

import "./App.css";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {selectedContact ? (
        <Selected
          contact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      ) : (
        <ContactList setSelectedContact={setSelectedContact} />
      )}
    </>
  );
}

export default App;

import './App.css';
import { Grid } from '@mui/material';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addNewContact = (newContact1) => {
    setContacts([...contacts, newContact1])
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={10}>
        <Grid item xs={6}>
          <ContactForm addContact={addNewContact} />
        </Grid>
        <Grid item xs={6}>
          {
            contacts.map((contact,a) => (
              <Contact key={a} data={contact} />
            ))
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

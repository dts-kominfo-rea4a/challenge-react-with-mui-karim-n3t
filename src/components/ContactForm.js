// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { useState } from "react";
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";

const ContactForm = ({addContact}) => {
  // Form berisi name, phone, email, dan photo url
  const initialState = {name: "", phone: "", email: "", photo: ""};
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState(initialState);

  const handleInput = (name, value) => {
    setNewContact({...newContact, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact(initialState);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <TextField required fullWidth label="Name" name="name" variant="filled" margin="normal" value={newContact.name} onChange={e => handleInput('name', e.target.value)} />
          <TextField required fullWidth label="Phone" name="phone" variant="filled" margin="normal" value={newContact.phone} onChange={e => handleInput('phone', e.target.value)} />
          <TextField required fullWidth label="Email" name="email" variant="filled" margin="normal" value={newContact.email} onChange={e => handleInput('email', e.target.value)} />
          <TextField required fullWidth label="Photo URL" name="photo" variant="filled" margin="normal" value={newContact.photo} onChange={e => handleInput('photo', e.target.value)} />
        </CardContent>
        <CardActions>
          <Button type="submit">Add New</Button>
        </CardActions>
      </form>
    </Card>
  );
}

export default ContactForm;
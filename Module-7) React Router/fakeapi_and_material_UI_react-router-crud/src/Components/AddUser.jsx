import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const { name, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users', user);
    Swal.fire({
      title: 'Success!',
      text: 'User has been added.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <Container style={{ fontFamily: 'Poppins' }}>
      <Typography variant="h4" gutterBottom>
        ADD BLOG
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={onInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { fontFamily: 'Poppins' } }}
          InputProps={{ style: { fontFamily: 'Poppins' } }}
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={onInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { fontFamily: 'Poppins' } }}
          InputProps={{ style: { fontFamily: 'Poppins' } }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ fontFamily: 'Poppins' }}
        >
          Add User
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color='secondary'
          type='button'
          style={{ fontFamily: 'Poppins' }}
          onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </form>
    </Container >
  );
}

export default AddUser;

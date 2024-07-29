/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const { name, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    Swal.fire({
      title: 'Success!',
      text: 'User has been updated.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit User
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Update User
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
    </Container>
  );
}

export default EditUser;

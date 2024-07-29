import { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Users() {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     Swal.fire({
    //         title: 'Welcome to the CRUD Application!',
    //         confirmButtonText: 'Continue'
    //     });
    // }, []);

    useEffect(() => {
        const showWelcomeAlert = async () => {
            const isWelcomeAlertShown = localStorage.getItem('welcomeAlertShown');
            if (!isWelcomeAlertShown) {
                await Swal.fire({
                    title: 'Welcome to the Api Using CRUD Application!',
                    confirmButtonText: 'Continue'
                });
                localStorage.setItem('welcomeAlertShown', 'true');
            }
        };
        showWelcomeAlert();
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleBeforeUnload = () => {
        localStorage.removeItem('welcomeAlertShown');
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3000/users');
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to restore this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:3000/users/${id}`);
                loadUsers();
                Swal.fire(
                    'Deleted!',
                    'The user has been deleted.',
                    'success'
                );
            }
        });
    };

    return (
        <Container>
            <br />
            <Button variant="contained" color="success" component={Link} to="/users/add">
                ADD BLOG
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" component={Link} to={`/users/edit/${user.id}`}>
                                    Edit
                                </Button>
                                &nbsp;
                                <Button variant="contained" color="error" onClick={() => deleteUser(user.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
}

export default Users;

import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Swal from 'sweetalert2';

function Home() {
    useEffect(() => {
        Swal.fire(
            'Welcome to the Api Using CRUD Application!',
        );
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>

            </Typography>
        </Container>
    );
}

export default Home;

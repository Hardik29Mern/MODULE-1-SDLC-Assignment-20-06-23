import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(res => {
          setData(data.filter(user => user.id !== id));
        }).catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List Of Users</h1>
      <div className='w-100 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-between mb-3'>
          <input
            type="text"
            placeholder="Search users..."
            className="form-control w-25"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                  <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

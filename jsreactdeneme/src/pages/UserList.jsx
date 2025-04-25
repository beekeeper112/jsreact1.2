import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      email
    };
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
  };

  return (
    <>
      <h1>Kullanıcı Listesi</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Kayıt Ol</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/kullanicilar/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;

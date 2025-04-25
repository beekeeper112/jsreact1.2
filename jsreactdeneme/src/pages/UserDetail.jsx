import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Kullanıcı Detayı</h1>
      <p>Kullanıcı ID: {id}</p>
      <p>Burada kullanıcı detayları gösterilecek.</p>
    </>
  );
};

export default UserDetail;

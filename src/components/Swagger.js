import { useEffect, useState } from 'react';

const url = `${process.env.REACT_APP_URL}/configuration/restServers`;
// const token = process.env.REACT_APP_BEARER;
const token = localStorage.getItem('token');

const Login = () => {
  const [swag, setSwag] = useState({});

  const getData = async () => {
    try {
      const res = await fetch(url, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      // console.log(data)
      setSwag(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Rest Server: {swag[0]}</div>;
};

export default Login;

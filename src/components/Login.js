import { useState } from 'react';

const url = process.env.REACT_APP_URL;
const user = process.env.REACT_APP_USER;
const password = process.env.REACT_APP_PASSWORD;

const credintials = btoa(`${user}:${password}`);

const headers = new Headers();

headers.set('Authorization', 'Basic ' + credintials);

const Login = () => {
  const [usr, setUsr] = useState({});

  const getData = async () => {
    try {
      const res = await fetch(url, { headers });
      const data = await res.json();
      setUsr(data);
    } catch (error) {
      console.log(error);
    }
  };

  getData();
  console.log(user.authenticated);
  return <div>user: {usr.user}</div>;
};

export default Login;

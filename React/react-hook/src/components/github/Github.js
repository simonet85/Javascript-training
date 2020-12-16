import React, { useEffect, useState } from 'react';
import Media from 'react-bootstrap/Media';
import ReactLoading from 'react-loading';
import axios from 'axios';
const Github = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setData(res.data.items);
    setIsLoading(false);
  };

  const listUsers = data.map((user) => (
    <Media key={user.id}>
      <a href={user.html_url}>
        <img
          width={64}
          height={64}
          className='mr-3'
          src={user.avatar_url}
          alt='Generic placeholder'
        />
      </a>
      <Media.Body>
        <h5>Login: {user.login}</h5>
        <p>Id: {user.id}</p>
      </Media.Body>
    </Media>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setSearch(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      <h3>GitHub Users Results</h3>
      {isLoading && <ReactLoading type='spinningBubbles' color='#444' />}
      {listUsers}
    </div>
  );
};

export default Github;

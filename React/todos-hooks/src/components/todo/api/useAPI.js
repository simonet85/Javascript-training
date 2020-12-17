import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = (endpoint) => {
  const [data, setData] = useState([]);
  //To call data when component is mounted
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(endpoint);
    setData(res.data);
  };
  console.log(data);
  return data;
};

export default useAPI;

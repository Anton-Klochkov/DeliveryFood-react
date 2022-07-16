import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const result = await url;
        setData(result.data);
        setIsError(false);
      } catch (error) {
        setIsError(false);
        throw new Error(error);
      } finally {
        setIsLoading(true);
      }
    };
    getData();
  }, []);


  return { data, isError, isLoading};
};

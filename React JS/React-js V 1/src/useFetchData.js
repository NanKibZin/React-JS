import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);
        setData(data);
    } catch (error){
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  },[]);
  return { isLoading, isError, data };
};
export default useFetchData;

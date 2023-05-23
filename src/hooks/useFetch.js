import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (error) {
        console.error(error);
      }
    }

    const interval = () => setInterval(fetchData, 5000);
    fetchData();
    interval();

    return () => clearInterval(interval);
  }, [url]);

  return data;
}

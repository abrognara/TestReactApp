import { useState, useEffect, useRef } from 'react';

const useFetchCache = endpoint => {
    const cache = useRef({});
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
        if (!endpoint) return;

        const doFetch = async () => {
            if (cache.current[endpoint]) {
                console.log(`pulling from cache ${JSON.stringify(cache.current[endpoint])}`);
                setData(cache.current[endpoint]);
                setErr(null);
            }
            else {
                const res = await fetch(endpoint);
                console.log(`res = ${JSON.stringify(res)}`);
                if (!res.ok) {
                    setErr({ status: res.status, statusText: res.statusText });
                }
                else {
                    const data = await res.json();
                    console.log(`data = ${JSON.stringify(data)}`);
                    cache.current[endpoint] = data;
                    setData(data);
                    setErr(null);
                }
            }
        };

        doFetch();
    }, [endpoint]);

    return { data, err };
};

export default useFetchCache;
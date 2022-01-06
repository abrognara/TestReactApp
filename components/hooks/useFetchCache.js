import { useState, useEffect, useRef } from 'react';

const useFetchCache = endpoint => {
    const cache = useRef({});
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
        if (!endpoint) return;

        const doFetch = async () => {
            if (cache.current[endpoint]) {
                console.log(`pulling from cache $$$`); // debug
                setData(cache.current[endpoint]);
                setErr(null);
            }
            else {
                const res = await fetch(endpoint);
                if (!res.ok) {
                    setErr({ status: res.status, statusText: res.statusText });
                }
                else {
                    const data = await res.json();
                    cache.current[endpoint] = data;
                    setData(data);
                    setErr(null);
                }
            }
        };

        doFetch();
    }, [endpoint]);

    console.log(`inside hook: ${JSON.stringify({ data, err })}`); // debug
    return { data, err };
};

export default useFetchCache;
import { useEffect } from "react";

function useFetchData(url, setData) {
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch((error) => console.log(error));
    }, [url, setData]);
}

export default useFetchData;
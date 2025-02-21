import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        axios.get('https://market-cwgu.onrender.com/bot/homepage/')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <ul>
                {data.map((dataItem, dataIndex) => (
                    <li key={dataIndex}>
                        <h1>{dataItem.name}</h1>
                        <p>{dataItem.description}</p>
                        <ul>
                            {dataItem.items && dataItem.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <h2>{item.name}</h2>
                                    <h2>{item.price}</h2>
                                    <p>{item.description}</p>
                                    <h3>{item.category}</h3>
                                    {item.photo && <img src={item.photo} alt={item.name} />}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test;

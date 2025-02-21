import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                {data.map((dataItem, dataIndex) => {
                    const limitedItems = dataItem.items ? dataItem.items.slice(0, 7) : [];
                    const hasMore = dataItem.items && dataItem.items.length > 7;

                    return (
                        <li key={dataIndex}>
                            <h1>{dataItem.name}</h1>
                            <p>{dataItem.description}</p>
                            <ul>
                                {limitedItems.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <h2>{item.name}</h2>
                                        <h2>{item.price}</h2>
                                        <p>{item.description}</p>
                                        <h3>{item.category}</h3>
                                        {item.photo && <img src={item.photo} alt={item.name} />}
                                    </li>
                                ))}
                            </ul>

                            {/* عرض زر See More إذا كان هناك أكثر من 10 عناصر */}
                            {hasMore && (
                                <h1 to={`/more-items/${dataItem.id}`} className="see-more-button">
                                    See More →
                                </h1>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Test;


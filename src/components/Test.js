import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
                    return (
                        
                        <li key={dataIndex}>
                            <h1>{dataItem.name}</h1>
                            <p>{dataItem.description}</p>
                            <ul>
                                {dataItem.limited_student_items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <h2>{item.name}</h2>
                                        <h2>{item.price}</h2>
                                        <p>{item.description}</p>
                                        <h3>{item.category}</h3>
                                        {item.photo && <img src={item.photo} alt={item.name} />}
                                    </li>
                                ))}
                                  {dataItem.limited_doctor_items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <h2>{item.name}</h2>
                                        <h2>{item.price}</h2>
                                        <p>{item.description}</p>
                                        <h3>{item.category}</h3>
                                        {item.photo && <img src={item.photo} alt={item.name} />}
                                    </li>
                                ))}
                                
                                  <Link to={`catg/${dataItem.id}`}>
                                <h2  >
                                    See More →
                                </h2>
                                </Link>
                            </ul>

                    
                         
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Test;


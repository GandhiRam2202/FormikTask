import React, { useEffect, useState } from 'react';
import Card from './Card'
import axios from 'axios';

const History = () => {
    const [books, setBooks] = useState([])
    useEffect(() => { fetchData() }, [])
    const fetchData = async () => {
        await axios.get('https://65e9f147c9bf92ae3d3ab0b0.mockapi.io/library')
            .then(res => setBooks(res.data))
            .catch((err) => { console.log(err); })
    }


    let history = books.filter(item => item.cat === 'History');
    return (
        <div className='container-fluid'>
        <div className="container">
            <div className="row">
                {history.map((item) => {
                    return (
                        <div className="col-sm-12 col-lg-4 col-xl-3 mt-5" key={item.id}>

                            <Card item={item} />
                        </div>
                    )


                })}
            </div>
        </div>
    </div>
    );
};

export default History;
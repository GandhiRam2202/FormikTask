import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ setId }) => {
    const [books, setBooks] = useState([])
    const[delet, setDelet] = useState([])

    const navigate = useNavigate()


    useEffect(() => { fetchData() }, [])
    const fetchData = async () => {
        await axios.get('https://65e9f147c9bf92ae3d3ab0b0.mockapi.io/library')
            .then(res => setBooks(res.data))
            .catch((err) => { console.log(err); })
    }

    const handleEdit=(id)=>{
        setId(id)
        navigate(`/bookupdate/${id}`)
    }

    const handleDel = async (id) => {
        await axios.delete(`https://65e9f147c9bf92ae3d3ab0b0.mockapi.io/library/${id}`)
        .then(res=>setDelet(res.data))
        .catch((err)=>{console.log(err)})
        navigate('/')
      }
    return (
        <div>
            <div className="p-0 user">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="sticky-header">
                            <tr className="table-primary">
                                <th scope="col">TITLE</th>
                                <th scope="col">AUTHOR</th>
                                <th scope="col">ISBN NO</th>
                                <th scope="col">PUBLICATION YEAR</th>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">UPDATE</th>
                                <th scope="col">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((item, index) => (
                                <tr className="table-success" key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.isbno}</td>
                                    <td>{item.pubdate}</td>
                                    <td>{item.cat}</td>
                                    <td>
                                        <button className='btnUpdate' onClick={() => { handleEdit(item.id) }}>Update</button>
                                    </td>
                                    <td>
                                        <button className='btnDelete' onClick={() => { handleDel(item.id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;

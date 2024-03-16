import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Author = ({ setId }) => {
    const [books, setBooks] = useState([])
    const [delet, setDelet] = useState([])

    const navigate = useNavigate()


    useEffect(() => { fetchData() }, [])
    const fetchData = async () => {
        await axios.get('https://65e9f147c9bf92ae3d3ab0b0.mockapi.io/library')
            .then(res => setBooks(res.data))
            .catch((err) => { console.log(err); })
    }

    const handleEdit=(id)=>{
        setId(id)
        navigate(`/authorupdate/${id}`)
    }

    const handleDel = async (id) => {
        await axios.delete(`https://65e9f147c9bf92ae3d3ab0b0.mockapi.io/library/${id}`)
            .then(res => setDelet(res.data))
            .catch((err) => { console.log(err) })
        navigate('/')
    }
    return (
        <div>
            <div className="p-0 user">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="sticky-header">
                            <tr className="table-primary">
                                <th scope="col">AUTHOR</th>
                                <th scope="col">BOOK</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Short Bio</th>
                                <th scope="col">UPDATE</th>
                                <th scope="col">DELETE</th>

                            </tr>
                        </thead>
                        <tbody>
                            {books.map((item, index) => (
                                <tr className="table-success" key={index}>
                                    <td>{item.author}</td>
                                    <td>{item.title}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.bio}</td>
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

export default Author;
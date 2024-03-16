import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Comics from './Comics';
import All from './All';
import User from './User';
import AddUser from './AddUser'
import AuthorUpdate from './AuthorUpdate'
import AddAuthor from './AddAuthor'
import Author from './Author';
import BookUpdate from './BookUpdate';
import AutoBio from './AutoBio';
import Jokes from './Jokes';
import History from './History';
import Horror from './Horror'
import Fantasy from './Fantasy';
import Mistery from './Mistery';
import Developer from './Developer';
import Love from './Love';
import Credits from './Credits';
import './Home.css'


const Home = () => {
    const [id, setId] = useState(0)

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName === activeItem ? null : itemName);
    };

    return (

        <>

            <div className="container-fluid">
                <div className="col-sm-12">
                    <div className="row d-flex justify-content-around">
                        <div className="sidebar col-2 text-center">
                        <h3 className={`mb-3 mt-3 ${activeItem === '/user' ? 'activ' : ''}`}>
        <Link to='/user' className='fw-bolder' onClick={() => handleItemClick('/user')}>Books</Link>
      </h3>
      <h3 className={`mb-3 mt-3 ${activeItem === '/author' ? 'activ' : ''}`}>
        <Link to='/author' className='fw-bolder' onClick={() => handleItemClick('/author')}>Author</Link>
      </h3>
      <h3 className={`mb-3 mt-3 ${activeItem === '/adduser' ? 'activ' : ''}`}>
        <Link to='/adduser' className='fw-bolder' onClick={() => handleItemClick('/adduser')}>Add Book</Link>
      </h3>
      <h3 className={`mb-3 mt-3 ${activeItem === '/addauthor' ? 'activ' : ''}`}>
        <Link to='/addauthor' className='fw-bolder' onClick={() => handleItemClick('/addauthor')}>Add Author</Link>
      </h3>
      <h3 className={`mb-3 mt-3 ${activeItem === '/credits' ? 'activ' : ''}`}>
        <Link to='/credits' className='fw-bolder' onClick={() => handleItemClick('/credits')}>Credits</Link>
      </h3>
      <h3 className={`mb-3 mt-3 ${activeItem === '/developer' ? 'activ' : ''}`}>
        <Link to='/developer' className='fw-bolder' onClick={() => handleItemClick('/developer')}>Developer</Link>
      </h3>
                        </div>

                        <div className="content col-10 p-0">
                            <Routes>
                                <Route path='/' element={<All />} />
                                <Route path='/autobio' element={<AutoBio />} />
                                <Route path='/jokes' element={<Jokes />} />
                                <Route path='/love' element={<Love />} />
                                <Route path='/developer' element={<Developer />} />
                                <Route path='/history' element={<History />} />
                                <Route path='/horror' element={<Horror />} />
                                <Route path='/fantasy' element={<Fantasy />} />
                                <Route path='/mistery' element={<Mistery />} />
                                <Route path='/adduser' element={<AddUser />} />
                                <Route path='/credits' element={<Credits />} />
                                <Route path='/addauthor' element={<AddAuthor />} />
                                <Route path='/comics' element={<Comics />} />
                                <Route path='/user' element={<User setId={setId} />} />
                                <Route path='/author' element={<Author setId={setId} />} />
                                <Route path='/authorupdate/:id' element={<AuthorUpdate id={id} />} />
                                <Route path='/bookupdate/:id' element={<BookUpdate id={id} />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Home;
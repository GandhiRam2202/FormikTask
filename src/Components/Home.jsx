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


const Home = () => {
    const[id,setId]=useState(0)
    return (
        
        <>
            
            <div className="container-fluid">
            <div className="col-sm-12">
                <div className="row d-flex justify-content-around">
                    <div className="sidebar col-2 text-center">   
                    <h3><Link to='/user' className='fw-bolder'>Books</Link></h3>
                    <h3><Link to='/author' className='fw-bolder'>Author</Link></h3>
                    <h3><Link to='/adduser' className='fw-bolder'>Add Book</Link></h3>
                    <h3><Link to='/addauthor' className='fw-bolder'>Add Author</Link></h3>
                    <h3><Link to='/developer' className='fw-bolder'>Developer</Link></h3>
                    
                    </div>
                    
                    <div className="content col-10 p-0">
                    <Routes>
                        <Route path='/' element={<All/>}/>
                        <Route path='/autobio' element={<AutoBio/>}/>
                        <Route path='/jokes' element={<Jokes/>}/>
                        <Route path='/developer' element={<Developer/>}/>
                        <Route path='/history' element={<History/>}/>
                        <Route path='/horror' element={<Horror/>}/>
                        <Route path='/fantasy' element={<Fantasy/>}/>
                        <Route path='/mistery' element={<Mistery/>}/>
                        <Route path='/user' element={<User setId={setId}/>}/>
                        <Route path='/author' element={<Author setId={setId}/>}/>
                        <Route path='/adduser' element={<AddUser/>}/>
                        <Route path='/addauthor' element={<AddAuthor/>}/>
                        <Route path='/comics' element={<Comics/>}/>
                        <Route path='/authorupdate/:id' element={<AuthorUpdate id={id}/>}/>
                        <Route path='/bookupdate/:id' element={<BookUpdate id={id}/>}/>
                    </Routes>
                    </div>
                    </div>
                </div>
            </div>
            
        
        </>
    );
};

export default Home;
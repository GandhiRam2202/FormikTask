import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky-top'>
           <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <button className="navbar-toggler d-block d-lg-none bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <span className="navbar-toggler-icon"></span>
</button>

<h2 className='text-white p-0 m-0'><span className="fa-solid fa-book" style={{color: "#ffffff"}}></span>&nbsp;Library&nbsp;<span className="fa-solid fa-book" style={{color: "#ffffff"}}></span></h2>
    <button className="bg-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav ms-auto">
          
          <Link to='/' className='fw-bolder'>All</Link>
          <Link to='/autobio' className='fw-bolder'>AutoBiography</Link>
          <Link to='/history' className='fw-bolder'>History</Link>
          <Link to='/fantasy' className='fw-bolder'>Fantasy</Link>
          <Link to='/mistery' className='fw-bolder'>Mystery</Link>
          <Link to='/horror' className='fw-bolder'>Horror</Link>
          <Link to='/comics' className='fw-bolder'>Comics</Link>
          <Link to='/jokes' className='fw-bolder'>Jokes</Link>
        
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
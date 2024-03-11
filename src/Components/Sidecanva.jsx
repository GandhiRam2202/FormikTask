import React from 'react';
import { Link } from 'react-router-dom';

const Sidecanva = () => {
    return (
        <div>
           

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h4 className="offcanvas-title text-white fw-bolder" id="staticBackdropLabel">Side Bar</h4>
    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
    <div className=" text-center">
                      
                    <h3><Link to='/user' className='fw-bolder'>Books</Link></h3>
                    <h3><Link to='/author' className='fw-bolder'>Author</Link></h3>
                    <h3><Link to='/adduser' className='fw-bolder'>Add Book</Link></h3>
                    <h3><Link to='/addauthor' className='fw-bolder'>Add Author</Link></h3>
                    <h3><Link to='/developer' className='fw-bolder'>Developer</Link></h3>
                      
                      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Sidecanva;
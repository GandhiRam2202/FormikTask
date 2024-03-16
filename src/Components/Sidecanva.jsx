import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidecanva = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
      setActiveItem(itemName === activeItem ? null : itemName);
  };
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
    </div>
  </div>
</div> 
        </div>
    );
};

export default Sidecanva;
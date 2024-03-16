import React from 'react';
import { useNavigate } from 'react-router-dom';

const Developer = () => {
    const navigate = useNavigate();
    let obj = {src:'Images/2.jpg',m:'Images/m.png',e:'Images/e.png',r:'Images/r.png',n:'Images/n.png'}
    
    const handleClick=()=>{
        navigate('/')
    }
    return (
        <>
            <div className='col-12 d-flex justify-content-center'>
            <div className="border-img">
            <img src={obj.src} alt=""  className='img'/>
            </div>
        </div>
            
        <div className='col-12 d-flex text-primary justify-content-center'>
           <h5 className='fw-bolder'>Hi I'm Parthiban</h5>
        </div>
        <div className="row d-none d-lg-block">
            <div className="col-lg-12 d-flex justify-content-center">    
            <img src={obj.m} alt=""  className='p-3'width='100px'/>
            <img src={obj.e} alt=""  className='p-3'width='100px'/>
            <img src={obj.r} alt=""  className='p-3'width='100px'/>
            <img src={obj.n} alt=""  className='p-3'width='100px'/>
            </div>
        </div>
        <div className="row d-block d-lg-none">
            <div className="col-lg-12 d-flex justify-content-center">    
            <img src={obj.m} alt=""  className='p-3'width='70px'/>
            <img src={obj.e} alt=""  className='p-3'width='70px'/>
            <img src={obj.r} alt=""  className='p-3'width='70px'/>
            <img src={obj.n} alt=""  className='p-3'width='70px'/>
            </div>
        </div>
        
        <div className='col-12 d-flex text-primary justify-content-center'>
           <h5 className='fw-bolder'>Full Stack Developer</h5>
        </div>
        <div className='col-12 d-flex text-primary justify-content-center'>
           <h5 className=' fw-bolder'>gandhiramparthi@gmail.com</h5>
        </div>
        <div className='col-12 d-flex text-primary justify-content-center'>
           <h5 className=' fw-bolder'>8248353700</h5>
        </div>
        <div className='col-12 d-flex justify-content-center'>
           <button onClick={handleClick} className='btn1'>Back</button>
        </div>
        </>
                    
        
            
        
    );
};

export default Developer;
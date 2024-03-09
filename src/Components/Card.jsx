import React from 'react';

const Card = ({item}) => {
    let img = {src:'Images/1.png'}
    return (
        
             <div className="card h-100">
            <div className="card-img d-flex justify-content-center">
            <img src={img.src} width='60%'/>
                </div>
            <div className='col-12 fw-bolder text-center'>
             Title : {item.title}
            </div>
            <div className='col-12 fw-bolder text-center'>
             Author : {item.author}
            </div>
            <div className='col-12 fw-bolder text-center'>
            ISBN No : {item.isbno}
            </div>
            <div className='col-12 fw-bolder text-center'>
            YEAR : {item.pubdate}
            </div>
            <div className='col-12 fw-bolder text-center'>
            Catogery : {item.cat}
            </div>
         
             
             
        </div>
        
    );
};

export default Card;
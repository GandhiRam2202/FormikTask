import React from 'react';
import { useNavigate } from 'react-router-dom';


const Credits = () => {
    let obj = { ceo: 'Images/5.png', pugazh: 'Images/4.png', suresh: 'Images/3.png' }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
    return (
        <>

            <div className='container'>
                <div className='col-12 text-danger justify-content-center'>
                    <div className="row d-none d-lg-block p-0">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="col-4 border-img">
                                <img src={obj.pugazh} alt="" className='ceo' />
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Pugazharasan Sir</h5>
                                <h6 className='fw-bolder text-center mt-2 text-primary'>HTML|Bootstrap|JavaScript</h6>
                                <h6 className='fw-bolder text-center mt-2 text-primary'>Mentor</h6>
                            </div>
                            <div className="col-4 border-img">
                                <img src={obj.ceo} alt="" className='ceo' />
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Arun Prakash</h5>
                                <h6 className='fw-bolder text-center mt-2 text-primary'>GUVI CEO</h6>
                            </div>
                            <div className="col-4 border-img">
                                <img src={obj.suresh} alt="" className='ceo' />
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Sureshbabu Sir</h5>
                                <h6 className='fw-bolder text-center mt-2 text-primary'>React Mentor</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-12 d-block d-lg-none border-img">
                            <div className="col-12 d-flex justify-content-center">
                                <img src={obj.ceo} alt="" className='ceo' />
                            </div>
                            <div className="col-12">
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Arun Prakash</h5>
                                <h6 className='fw-bolder text-center mt-2 text-primary'>GUVI CEO</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="pugazh col-12 d-block d-lg-none border-img">
                            <div className="col-12 d-flex justify-content-center">
                                <img src={obj.pugazh} alt="" className='ceo' />
                            </div>
                            <div className="col-12">
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Pugazharasan Sir</h5>
                                <h5 className='col-12 fw-bolder text-center mt-2 text-primary'>HTML</h5>
                                <h5 className='col-12 fw-bolder text-center mt-2 text-primary'>Bootstrap</h5>
                                <h5 className='col-12 fw-bolder text-center mt-2 text-primary'>JavaScript</h5>
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Mentor</h5>
                            </div>
                        </div>
                    </div>
                    <div className="suresh row justify-content-center">

                        <div className="col-12 d-block d-lg-none border-img">
                            <div className="col-12 d-flex justify-content-center">
                                <img src={obj.suresh} alt="" className='ceo' />
                            </div>
                            <div className="col-12">
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Sureshbabu Sir</h5>
                                <h5 className='col-12 fw-bolder text-center mt-2 text-primary'>React</h5>
                                <h5 className='fw-bolder text-center mt-2 text-primary'>Mentor</h5>
                            </div>
                        </div>
                    </div>


                    <div className='thanks container fw-bolder text-primary'>
                        

                        <div>Dear Mentors,</div>

                        I wanted to take a moment to express my heartfelt thanks for your invaluable guidance and support in shaping me into the developer I am today. Your wisdom and encouragement have been instrumental in my growth, and I am truly grateful for the impact you've had on my journey.

                    </div>
                    

                    <div className='col-12 d-flex text-danger justify-content-center'>
                        <button onClick={handleClick} className='btn1 mt-2'>Back</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Credits;
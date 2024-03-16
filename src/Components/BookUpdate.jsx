import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import axios from 'axios';

const BookUpdate = ({ id }) => {
    const navigate = useNavigate();
    const [book, setbook] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://65e9f147c9bf92ae3d3ab0b0.mockapi.io/library/${id}`);
            setbook(response.data);
        } catch (error) {
            console.error('Error fetching author:', error);
        }
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title Required'),
        author: Yup.string().required('Author Required'),
        isbno: Yup.string()
            .required('ISBN NO Required')
            .matches(/^\d{13}$/, 'ISBN NO must be a 13-digit number'),
        pubdate: Yup.string()
            .required('Publication Date Required')
            .matches(/^\d{4}$/, 'Publication Date must be a 4-digit year'),
            dob: Yup.string()
            .required('Author DOB Required')
            .matches(
                /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
                'Author DOB must be in the format dd-mm-yyyy'
            ),         
        bio: Yup.string().required('Author Short Bio Required'),
        cat: Yup.string().required('Category Required'),
    });
    

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await axios.put(`https://65e9f147c9bf92ae3d3ab0b0.mockapi.io/library/${id}`, values);
            toast.success("Book Updated Successfully");
            navigate('/');
        } catch (error) {
            console.error('Error updating author:', error);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div className='container'>
        <ToastContainer />
        {book && (
           <Formik initialValues={book} validationSchema={validationSchema} onSubmit={handleSubmit}>
           <Form>
               <div className="col-lg-12">
                   <div className="row">

                       <div className='col-lg-6 p-0'>
                           <h1 className='text-center bg-primary p-0 m-0 text-white'>Book Details</h1>
                           <div className='col-lg-10 m-3'>
                               <label>Title <span className='req'>*</span></label><br />
                               <div className="row">
                                   <Field type='text' name='title' placeholder="Book Title"/>
                                   <ErrorMessage name='title' component='h6'  className='emsg'/>
                               </div>
                           </div>

                           <div className='col-lg-10 m-3'>
                               <label>Author <span className='req'>*</span></label><br />
                               <div className="row">
                                   <Field type='text' name='author' placeholder="Author Name"/>
                                   <ErrorMessage name='author' component='h6' className='emsg'/>
                               </div>
                           </div>

                           <div className='col-lg-10 m-3'>
                               <label>ISBN NO <span className='req'>*</span></label><br />
                               <div className="row">
                                   <Field type='text' name='isbno' placeholder="ISBN Number"/>
                                   <ErrorMessage name='isbno' component='h6' className='emsg' />
                               </div>
                           </div>

                           <div className='col-lg-10 m-3'>
                               <label>PUBLICATION DATE <span className='req'>*</span></label><br />
                               <div className="row">
                                   <Field type='text' name='pubdate' placeholder="Publication Date"/>
                                   <ErrorMessage name='pubdate' component='h6'  className='emsg'/>
                               </div>
                           </div>
                           <div className='col-lg-10 m-3'>
                               <label>CATEGORY <span className='req'>*</span></label><br />
                               <div className="row">
                                   <Field type='text' name='cat' placeholder="Book Category"/>
                                   <ErrorMessage name='cat' component='h6' className='emsg' />
                               </div>
                           </div>
                       </div>

                       <div className='col-lg-6 p-0'>
                           <h1 className='text-center bg-primary p-0 m-0 text-white'>Author Details</h1>
                           <div className='col-lg-10 m-3'>
                               <label>AUTHOR DOB <span className='req'>*</span></label><br />
                               <div className="row">
                                   <Field type='text' name='dob' placeholder="Author Date Of Birth"/>
                                   <ErrorMessage name='dob' component='h6' className='emsg'/>
                               </div>
                           </div>

                           <div className='col-lg-10 m-3'>
                               <label>AUTHOR SHORT BIO <span className='req'>*</span></label><br />
                               <div className="row">
                                   <Field as='textarea' name='bio' rows="5" placeholder="Enter your short bio here..."/>
                                   <ErrorMessage name='bio' component='h6' className='emsg' />
                               </div>
                           </div>

                               <div className='col-lg-10 m-3'>
                           <div className="row">
                               <button type='submit' className='add'>Update Book</button>
                           </div>
                               </div>
                       </div>
                   </div>
               </div>
           </Form>
       </Formik>
        )}
    </div>
    );
};

export default BookUpdate;
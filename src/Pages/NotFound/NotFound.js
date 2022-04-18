import React from 'react';
import error from '../../images/eror-404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center'>Error 404 page not found</h1>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;
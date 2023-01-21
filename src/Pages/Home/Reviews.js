import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';
const Reviews = () => {
    return (
        <div className='my-5'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary font-bold text-2xl'>Testimonials</p>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt=""/>
                </div>
            </div>
            <div className='py-5 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </div>
        </div>
    );
};

export default Reviews;
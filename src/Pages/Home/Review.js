import React from 'react';
import people from '../../assets/images/people1.png';
const Review = () => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex my-5'>
                    <div className="w-16 rounded-full ring ring-primary mr-5">
                        <img src={people} alt=''/>
                    </div>
                    <div>
                        <p className='text-xl'>Koushik Roy</p>
                        <p>Califoniya</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
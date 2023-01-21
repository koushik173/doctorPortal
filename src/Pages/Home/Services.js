import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services=[
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'If a dog chews shoes whose shoes does he choose',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'If a dog chews shoes whose shoes does he choose',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'If a dog chews shoes whose shoes does he choose',
            img: whitening
        }


    ];
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h5 className='text-primary font-bold text-4xl'>Our Services</h5>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
                {
                    services.map(sr=><Service key={sr._id} service={sr} ></Service>)
                }
                
            </div>
        </div>
    );
};

export default Services;
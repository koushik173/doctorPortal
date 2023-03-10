import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTittle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgClass="bg-[#3A4256]" cardTittle="Our Locations" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTittle="Contact Us" img={phone}></InfoCard>
            
        </div>
    );
};

export default Info;
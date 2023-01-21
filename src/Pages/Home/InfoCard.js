import React from 'react';
const InfoCard = ({img,cardTittle,bgClass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album"/>
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTittle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
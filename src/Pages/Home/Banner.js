import React from 'react';
import bannerBack from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Share/PrimaryButton';
const Banner = () => {
    return (
        // style={{ backgroundImage: `url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`}} 
        <div style={{
            background: `url(${bannerBack})`
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryButton>Get Start</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
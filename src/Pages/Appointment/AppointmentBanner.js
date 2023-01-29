import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bannerBack from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';


const AppointmentBanner = ({date,setDate}) => {

    return (
        <div style={{
            background: `url(${bannerBack})`
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        showOutsideDays
                        />
                        
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
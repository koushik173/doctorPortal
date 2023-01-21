import React from 'react';

const Booking = ({booking,setTreatment}) => {
    const {name,slots}=booking;
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary justify-center">{name}</h2>
                <p>
                    {
                        slots.length? <span>{slots[0]}</span>:
                        <span className='text-red-500'>Try another day</span>
                    }
                </p>
                <p className='uppercase'>{slots.length} {slots.length>1? 'spaces':'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                    for="booking-modal" 
                    onClick={()=>setTreatment(booking)} 
                    disabled={slots.length ===0} 
                    className="btn btn-secondary w-full">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Booking;
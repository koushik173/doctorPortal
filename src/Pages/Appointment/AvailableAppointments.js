import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [bookings, setBookings] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{
        fetch('bookings.json')
        .then(res=>res.json())
        .then(data=>setBookings(data));
    },[])
    return (
        <div>
            <h4 className='text-xl text-secondary font-bold text-center'>Available Appointments on {format(date, 'PP')}</h4>
            <h5 className='text-accent font-bold text-center'>You Select an appointment</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    bookings.map(sr=><Booking
                    key={sr._id}
                    booking={sr}
                    setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;
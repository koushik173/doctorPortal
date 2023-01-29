import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    // const [bookings, setBookings] = useState([]);
    // const [treatment, setTreatment] = useState(null);
    // const formattedDate = format(date, 'PP');
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setBookings(data));
    // },[formattedDate])

    //using react query
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const {data: bookings, isLoading, refetch} = useQuery(['available',formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res=>res.json())
         )
         if(isLoading){
            return <Loading></Loading>
         }

    return (
        <div>
            <h4 className='text-xl text-secondary font-bold text-center'>Available Appointments on {format(date, 'PP')}</h4>
            <h5 className='text-accent font-bold text-center my-5 mb-10'>You Select an appointment</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    bookings?.map(sr=><Booking
                    key={sr._id}
                    booking={sr}
                    setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {treatment && <BookingModal 
            setTreatment={setTreatment} 
            date={date} 
            treatment={treatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;
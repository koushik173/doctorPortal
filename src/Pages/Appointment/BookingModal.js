import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({treatment, date, setTreatment, refetch}) => {
    const {_id,name, slots} = treatment;
    const [user] = useAuthState(auth)
    const handleBooking = event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const date = event.target.date.value;
        const booking={
            treatmentId: _id,
            treatment: name,
            date,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }

        fetch(`http://localhost:5000/booking`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                toast(`appointment is set, ${date} at ${slot}`)
            }
            else{
                toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch();
            setTreatment(null);
        })

    } 
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input name="date" type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" value={user?.displayName || ''} readOnly className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="email" value={user?.email || ''} readOnly className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
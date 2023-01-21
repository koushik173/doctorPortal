import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {name, slots} = treatment;
    const handleBooking = event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);
        console.log(slot); 
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=><option>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
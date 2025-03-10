// booking.model.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  price: Number,
  otp: { type: Number, default: null },  // OTP field
  otpExpiration: { type: Date, default: null },
  otpVerified: {
    type: Boolean,
    default: false
  },
  paymentId: { type: String, required: true },
});

const BookingModel = mongoose.model('Booking', bookingSchema);

// Use ESM export
export default BookingModel;

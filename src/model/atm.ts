import mongoose from 'mongoose';
import { IAtmSchema } from '../types/atm';
const Schema = mongoose.Schema;

const AtmSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: {
          type: String, 
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        },
      },
    address: {
        type: String,
        required: true,
    },
    fullAddress: {
        type: String,
        required: false,
    },
    lga: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: false,
    }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

AtmSchema.index( { location: '2dsphere' } )

const Atm = mongoose.model<IAtmSchema>('Atm', AtmSchema);
export default Atm;
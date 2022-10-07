import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BranchSchema = new Schema({
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
        required: true,
    }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

BranchSchema.index( { location: "2dsphere" } )

const Branch = mongoose.model('Branch', BranchSchema);
export default Branch;
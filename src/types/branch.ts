import mongoose, { Types } from 'mongoose';

export interface IBranchSchema extends mongoose.Document<Types.ObjectId> {
    name: string;
    location: {
        coordinates: [ number ]
    },
    address: string,
    fullAddress?: string;
    lga: string;
    city?: string;
    state: string;
    country?: string;
};

export interface IAddBranchPayload {
    name: string;
    coordinates: [ number, number ];
    address: string,
    fullAddress?: string;
    lga: string;
    city?: string;
    state: string;
    country?: string;
};

export interface IGetNearByBranchsPayload {
    minimumDistance?: number;
    maximumDistance?: number;
    longitude: number;
    latitude: number;
}

import mongoose, { Types } from 'mongoose';

export interface IAtmSchema extends mongoose.Document<Types.ObjectId> {
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

export interface IAddAtmPayload {
    name: string;
    coordinates: [ number, number ];
    address: string,
    fullAddress?: string;
    lga: string;
    city?: string;
    state: string;
    country?: string;
};

export interface IGetNearByAtmsPayload {
    minimumDistance?: number;
    maximumDistance?: number;
    longitude: number;
    latitude: number;
}

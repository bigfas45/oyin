import mongoose, { Types } from 'mongoose';

export interface IAgentSchema extends mongoose.Document<Types.ObjectId> {
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

export interface IAddAgentPayload {
    name: string;
    coordinates: [ number, number ];
    address: string,
    fullAddress?: string;
    lga: string;
    city?: string;
    state: string;
    country?: string;
};

export interface IGetNearByAgentsPayload {
    minimumDistance?: number;
    maximumDistance?: number;
    longitude: number;
    latitude: number;
}

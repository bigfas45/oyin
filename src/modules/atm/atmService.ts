import Atm from '../../model/atm';
import { IAddAtmPayload, IGetNearByAtmsPayload } from '../../types/atm';

export const add = async (details: IAddAtmPayload) => {
    const { name, coordinates, lga, address, city, country } = details;
    const atm = await Atm.create({
        name,
        location: { type: 'Point', coordinates },
        lga,
        address,
        city,
        country,
    });

    return atm;
};

export const nearby = async (details: IGetNearByAtmsPayload) => {
    const { longitude, latitude, minimumDistance, maximumDistance } = details;
    const coordinates = [ longitude, latitude ];
    const atmsNearby = await Atm.find({
          location: { $near:
               {
                 $geometry: { type: 'Point',  coordinates },
                 $minDistance: minimumDistance,
                 $maxDistance: maximumDistance,
               },
            },
        });

     return {
      message:
      atmsNearby.length > 0
          ? `${atmsNearby.length} ATM location${atmsNearby.length > 1 ? 's': ''} found nearby`
          : 'No ATM locations found nearby',
      data: {
        meta: { count: atmsNearby.length },
        atmsNearby,
      },
    };
} 

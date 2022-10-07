import { Request, Response } from 'express';
import * as atmService from './atmService';

export const add = async (req: Request, res: Response) => {
    const { name, address, longitude, latitude, lga, city, state, country } = req.body;

  const atm = await atmService.add({
    name,
    coordinates: [ parseFloat(longitude), parseFloat(latitude) ],
    lga,
    address,
    city,
    state,
    country,
  });

  return res.status(201).json({ atm, message: 'ATM added successfully' });
};

export const nearby = async (req: Request, res: Response) => {
  const { minimumDistance, maximumDistance, longitude, latitude } = req.query;
  const atmsNearby = await atmService.nearby({
    longitude: parseFloat(longitude!.toString()),
      latitude: parseFloat(latitude!.toString()),
      minimumDistance: minimumDistance ? parseFloat(minimumDistance.toString()) : 0,
      maximumDistance: maximumDistance ? parseFloat(maximumDistance.toString()) : 1000,
  });

  return res
    .status(200)
    .json({ atmsNearby, message: 'ATMs nearby fetched successfully' });
};

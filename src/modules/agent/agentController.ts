import { Request, Response } from 'express';
import * as agentService from './agentService';

export const add = async (req: Request, res: Response) => {
  const { name, address, longitude, latitude, lga, city, state, country } = req.body;

  try {
    const agent = await agentService.add({
      name,
      coordinates: [ parseFloat(longitude), parseFloat(latitude) ],
      lga,
      address,
      city,
      state,
      country,
    });
  
    return res.status(201).json({ agent, message: 'Agent added successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const nearby = async (req: Request, res: Response) => {
  const { minimumDistance, maximumDistance, longitude, latitude } = req.query;
  try {
    const { message, data } = await agentService.nearby({
      longitude: parseFloat(longitude!.toString()),
      latitude: parseFloat(latitude!.toString()),
      minimumDistance: minimumDistance ? parseFloat(minimumDistance.toString()) : 0,
      maximumDistance: maximumDistance ? parseFloat(maximumDistance.toString()) : 1000,
    });
  
    return res
      .status(200)
      .json({ message, data });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

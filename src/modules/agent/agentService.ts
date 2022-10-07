import { IAddAgentPayload, IGetNearByAgentsPayload } from '../../types/agent';
import Agent from '../../model/agent';

export const add = async (details: IAddAgentPayload) => {
  const { name, coordinates, lga, address, city, country } = details;
  const agent = await Agent.create({
    name,
    location: { type: 'Point', coordinates },
    lga,
    address,
    city,
    country,
  });

  return agent;
};

export const nearby = async (details: IGetNearByAgentsPayload) => {
  const { longitude, latitude, minimumDistance, maximumDistance } = details;
  const coordinates = [longitude, latitude];
  const agentsNearby = await Agent.find({
    location: {
      $near: {
        $geometry: { type: 'Point', coordinates },
        $minDistance: minimumDistance,
        $maxDistance: maximumDistance,
      },
    },
  });

  return {
    message:
      agentsNearby.length > 0
        ? `${agentsNearby.length} Agent location${agentsNearby.length > 1 ? 's': ''} found nearby`
        : 'No Agent locations found nearby',
    data: {
      meta: { count: agentsNearby.length },
      agentsNearby,
    },
  };
};

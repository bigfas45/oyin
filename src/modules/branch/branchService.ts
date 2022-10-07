import Branch from '../../model/branch';
import { IAddBranchPayload, IGetNearByBranchsPayload } from '../../types/branch';

export const add = async (details: IAddBranchPayload) => {
  const { name, coordinates, lga, address, city, country } = details;
  const branch = await Branch.create({
    name,
    location: { type: 'Point', coordinates },
    lga,
    address,
    city,
    country,
  });

  return branch;
};

export const nearby = async (details: IGetNearByBranchsPayload) => {
  const { longitude, latitude, minimumDistance, maximumDistance } = details;
  const coordinates = [longitude, latitude];
  const branchesNearby = await Branch.find({
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
      branchesNearby.length > 0
        ? `${branchesNearby.length} Branch location${branchesNearby.length > 1 ? 's': ''} found nearby`
        : 'No Branch locations found nearby',
    data: {
      meta: { count: branchesNearby.length },
      branchesNearby,
    },
  };
};

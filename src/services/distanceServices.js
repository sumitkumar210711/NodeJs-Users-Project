
const getDistanceService = async (latitude1, longitude1, latitude2, longitude2) => {
  
  // The following function is called when we want to convert the given degree value to radian.
  const degtoRad = deg => deg * Math.PI / 180;

  const φ1 = degtoRad(latitude1);
  const φ2 = degtoRad(latitude2);
  const Δφ = degtoRad(latitude2 - latitude1);
  const Δλ = degtoRad(longitude2 - longitude1);

  // The following formula is the haversine formula to find the distance between the two given coordinate points.
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const earthRadius = 6371; 
  const distanceinKm = earthRadius * c;

  return `${distanceinKm.toFixed(2)} KM`;
};

module.exports = { getDistanceService };

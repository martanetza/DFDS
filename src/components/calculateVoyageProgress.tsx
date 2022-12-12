export default function calculateVoyageProgress(
  startTime: string | Date,
  endTime: string | Date
) {
  const today = new Date();

  const startDate =
    typeof startTime === 'string' ? new Date(startTime) : startTime;
  const endDate = typeof endTime === 'string' ? new Date(endTime) : endTime;
  const totalTravelTime = Number(endDate) - Number(startDate);
  const totalTravelTimeInMinutes = Math.round(totalTravelTime / 1000 / 60);
  const currentTravelTime = Number(today) - Number(startDate);
  const currentTravelTimeInMinutes = Math.round(currentTravelTime / 1000 / 60);
  const currentTravelTimeInPrecentage = Math.round(
    (currentTravelTimeInMinutes / totalTravelTimeInMinutes) * 100
  );
  const currentTravelTimeOnAscale = Math.round(
    (currentTravelTimeInPrecentage / 100) * 14
  );

  return currentTravelTimeOnAscale;
}

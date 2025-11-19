import { useEffect, useState } from 'react';
import { getTrack } from '../dal/api';
import type { TrackDt } from '../ui/tracks/track_details/TrackDetails';

export const useTrackDetails = (activeTrack: string | null) => {
  const [track, setTrack] = useState<TrackDt | null>(null);

  useEffect(() => {
    if (activeTrack === null) return;
    getTrack(activeTrack).then((data) => setTrack(data.data));
  }, [activeTrack]);
  return { track };
};

export default useTrackDetails;

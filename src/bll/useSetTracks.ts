import { useEffect, useState } from 'react';
import type { Track } from '../ui/tracks/track/TrackItem.tsx';
import { getAllTracks } from '../dal/api.tsx';

export const useSetTracks = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    getAllTracks().then((data) => setTracks(data.data));
  }, []);

  return {
    tracks,
    isEmpty: !tracks,
  };
};

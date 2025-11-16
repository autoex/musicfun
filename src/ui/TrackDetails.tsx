const TrackDetails = ({ activeTrack }: { activeTrack: string | null }) => {
  return <div>{activeTrack ? activeTrack : "Track isn't selected"}</div>;
};

export default TrackDetails;

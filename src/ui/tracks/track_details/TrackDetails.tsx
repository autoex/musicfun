import useTrackDetails from "../../../bll/useTrackDetails";

type Artwork = {
  '150x150': string;
};
export type TrackDt = {
  title: string;
  artwork: Artwork;
};
const TrackDetails = ({ activeTrack }: { activeTrack: string | null }) => {
  const { track } = useTrackDetails(activeTrack);

  if (!activeTrack) return <div> "Track isn't selected"</div>;
  return (
    <div>
      {track?.title}
      <hr />
      <img
        src={track?.artwork['150x150']}
        alt=''
      />
    </div>
  );
};

export default TrackDetails;

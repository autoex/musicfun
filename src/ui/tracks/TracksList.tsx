import { useActiveTrack } from '../../bll/useActiveTrack';
import { useSetTracks } from '../../bll/useSetTracks';
import TrackItem from './track/TrackItem';
import TrackDetails from './track_details/TrackDetails';

const TracksList = () => {
  const { tracks, isEmpty } = useSetTracks();
  const { activeTrack, trackClickHandler } = useActiveTrack();

  if (isEmpty) return <div>There is no tracks</div>;
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        {tracks?.map((track) => (
          <TrackItem
            isSelected={track.track_id === activeTrack}
            key={track.track_id}
            track={track}
            trackClickHandler={trackClickHandler}
          />
        ))}
      </div>
      <div>
        <TrackDetails activeTrack={activeTrack} />
      </div>
    </div>
  );
};

export default TracksList;

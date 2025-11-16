import { useActiveTrack } from '../bll/useActiveTrack';
import { useSetTracks } from '../bll/useSetTracks';
import TrackDetails from './TrackDetails';
import TrackItem from './TrackItem';

const TracksList = () => {
  const { tracks, isEmpty } = useSetTracks();
  const { activeTrack, trackClickHandler} = useActiveTrack();
  

  if (isEmpty) return <div>There is no tracks</div>;
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {tracks?.map((track) => (
          <TrackItem
            isSelected={track.id === activeTrack}
            key={track.id}
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

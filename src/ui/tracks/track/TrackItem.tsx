import clsx from 'clsx';
import styles from './TrackItem.module.css'
export type Stream =  {
url: string
}
export type Track = {
  track_id: string;
  orig_filename: string;
  stream: Stream;
};
export type Props = {
  track: Track
  trackClickHandler: (id:string)=>void;
  isSelected: boolean;
};
const TrackItem = ({ isSelected, track, trackClickHandler }:Props) => {
  return (
    <li className={clsx({[styles.selectedItem]:isSelected})} onClick={()=>trackClickHandler(track.track_id)}>
        {track.orig_filename}
        <br />
      <audio
        title={track.orig_filename}
        
        src={track.stream.url}
        controls
      />

      
    </li>
  );
};

export default TrackItem;

export type TrackAttachment = {
  url: string;
};
export type TrackAttributes = {
  title: string;
  attachments: TrackAttachment[];
};

export type Track = {
  id: string;
  attributes: TrackAttributes;
};
export type Props = {
  track: Track
  trackClickHandler: (id:string)=>void;
  isSelected: boolean;
};
const TrackItem = ({ isSelected, track, trackClickHandler }:Props) => {
  return (
    <li style={{border: isSelected ? '1px solid red' : ''}} onClick={()=>trackClickHandler(track.id)}>
        {track.attributes.title}
        <br />
      <audio
        title={track.attributes.title}
        
        src={track.attributes.attachments[0].url}
        controls
      />

      
    </li>
  );
};

export default TrackItem;

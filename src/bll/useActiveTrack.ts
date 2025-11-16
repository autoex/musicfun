import { useState } from "react";

export const useActiveTrack = () => {
  const [activeTrack, setActiveTrack] = useState<null | string>(null);

  const trackClickHandler = (id: string) => {
    setActiveTrack(id);
  };

  return { activeTrack, trackClickHandler };
};

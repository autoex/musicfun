export const getAllTracks = async () => {
  return fetch(`https://discoveryprovider.audius.co/v1/tracks/search?query=eminem&limit=10`
  ).then((res) =>
    res.json(),
  );
};
export const getTrack = async (id:string) => {
  return fetch(`https://discoveryprovider.audius.co/v1/tracks/${id}`
  ).then((res) =>
    res.json(),
  );
};

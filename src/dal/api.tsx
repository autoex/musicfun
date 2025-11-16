

const dummyTracks = [
  {
    id: "track_001",
    attributes: {
      title: "Midnight Drive",
      attachments: [
        {
          url: "https://cdn.example.com/audio/midnight-drive.mp3"
        }
      ]
    }
  },
  {
    id: "track_002",
    attributes: {
      title: "Ocean Lights",
      attachments: [
        {
          url: "https://cdn.example.com/audio/ocean-lights.mp3"
        }
      ]
    }
  },
  {
    id: "track_003",
    attributes: {
      title: "Silent Echoes",
      attachments: [
        {
          url: "https://cdn.example.com/audio/silent-echoes.mp3"
        }
      ]
    }
  },
  {
    id: "track_004",
    attributes: {
      title: "City of Glass",
      attachments: [
        {
          url: "https://cdn.example.com/audio/city-of-glass.mp3"
        }
      ]
    }
  },
  {
    id: "track_005",
    attributes: {
      title: "Electric Horizon",
      attachments: [
        {
          url: "https://cdn.example.com/audio/electric-horizon.mp3"
        }
      ]
    }
  }
];

export const getAllTracks = async () => {
    
  return Promise.resolve({data:dummyTracks});
};

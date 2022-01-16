interface Location {
  name: string;
  url: string;
}

interface Origin {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  episode: string[];
  gender: string;
  image: string;
  location: Location;
  origin: Origin;
  species: string;
  status: string;
  type: string;
  url: string;
  created: string;
}

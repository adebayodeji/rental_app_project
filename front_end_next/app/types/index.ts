export type Account = {
  id: string;
  type: string;
  userid: string;
};

export type Property = {
  address?: string;
  bathroomCount?: number;
  coordinates: number[];
  description?: string;
  guestCount?: number;
  id?: string;
  image?: string;
  name?: string;
  price?: number;
  roomCount?: number;
  type?: string;
  userId?: string;
};

export type User = {
  email: string | null;
  id: string;
  image: string;
  name: string | null;
  status: boolean | null;
};
